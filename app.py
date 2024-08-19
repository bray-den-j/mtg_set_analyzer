from flask import Flask, render_template, request
import requests
import time
import numpy as np

app = Flask(__name__)

# Dictionary mapping main sets to their special guest sets
special_sets_mapping = {
    "WOE": ["WOT"],
    "OTJ": ["OTP", "BIG"],
    "STX": ["STA"],
    "BRO": ["BRR"],
    "MOM": ["MUL"],
    "LCI": ["REX"],
    # Add other sets and their special guests here
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/analyze', methods=['POST'])
def analyze():
    set_code = request.form['set_code']
    booster_type = request.form['booster_type']
    booster_price = float(request.form['booster_price'])

    # Fetch cards from the main set and special guest sets
    cards = get_cards_from_set(set_code)
    expected_value = calculate_expected_value(cards, booster_type)
    value_index = expected_value / booster_price
    top_3_cards = get_top_3_cards(cards)

    expected_value_rounded = round(expected_value, 2)
    value_index_rounded = round(value_index, 2)

    return render_template('result.html', set_code=set_code.upper(), booster_type=booster_type.capitalize(),
                           expected_value=expected_value_rounded, value_index=value_index_rounded, top_3_cards=top_3_cards)

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/value_index')
def value_index():
    return render_template('value_index.html')

def get_cards_from_set(set_code):
    cards = []
    
    # Fetch main set cards
    cards.extend(fetch_cards(set_code))

    # Fetch special guest set cards if they exist
    if set_code in special_sets_mapping:
        for guest_set in special_sets_mapping[set_code]:
            cards.extend(fetch_cards(guest_set))

    return cards

def fetch_cards(set_code):
    cards = []
    page = 1
    while True:
        url = f"https://api.scryfall.com/cards/search?q=e%3A{set_code}&page={page}"
        response = requests.get(url)

        if response.status_code == 200:
            data = response.json()
            cards.extend(data['data'])

            if data['has_more']:
                page += 1
                time.sleep(0.1)  # Delay between requests
            else:
                break
        else:
            print(f"Error: Unable to fetch cards for set {set_code}")
            break

    return cards

def calculate_average_price_by_rarity(cards, rarity):
    total_price = 0
    count = 0
    for card in cards:
        if card['rarity'] == rarity and card['prices']['usd']:
            total_price += float(card['prices']['usd'])
            count += 1

    return total_price / count if count > 0 else 0

def calculate_expected_value(cards, booster_type):
    avg_price_common = calculate_average_price_by_rarity(cards, 'common')
    avg_price_uncommon = calculate_average_price_by_rarity(cards, 'uncommon')
    avg_price_rare = calculate_average_price_by_rarity(cards, 'rare')
    avg_price_mythic = calculate_average_price_by_rarity(cards, 'mythic')

    if booster_type == 'play':
        mythic_probability = 0.125
        rare_probability = 0.875
        wildcard_avg_price = np.mean([avg_price_common, avg_price_uncommon, avg_price_rare, avg_price_mythic])
        foil_avg_price = np.mean([avg_price_common, avg_price_uncommon, avg_price_rare, avg_price_mythic])

        expected_value = (
            (avg_price_common * 7) +
            (avg_price_uncommon * 3) +
            (avg_price_rare * rare_probability) +
            (avg_price_mythic * mythic_probability) +
            wildcard_avg_price +
            foil_avg_price
        )

    elif booster_type == 'set':
        mythic_probability = 0.125
        rare_probability = 0.875
        wildcard_avg_price = np.mean([avg_price_common, avg_price_uncommon, avg_price_rare, avg_price_mythic])
        foil_avg_price = np.mean([avg_price_common, avg_price_uncommon, avg_price_rare, avg_price_mythic])

        expected_value = (
            (avg_price_common * 4) +
            (avg_price_uncommon * 3) +
            (avg_price_rare * rare_probability) +
            (avg_price_mythic * mythic_probability) +
            (wildcard_avg_price * 2) +
            foil_avg_price
        )
    elif booster_type == 'draft':
        mythic_probability = 0.125
        rare_probability = 0.875

        expected_value = (
            (avg_price_common * 10) +
            (avg_price_uncommon * 3) +
            (avg_price_rare * rare_probability) +
            (avg_price_mythic * mythic_probability)
        )

    return expected_value

def get_top_3_cards(cards):
    # Filter out cards without a price
    priced_cards = [card for card in cards if card['prices'] and card['prices']['usd']]

    # Sort the cards by price in descending order
    priced_cards.sort(key=lambda x: float(x['prices']['usd']), reverse=True)

    # Return the top 3 cards
    return priced_cards[:3]

if __name__ == "__main__":
    app.run(debug=True)