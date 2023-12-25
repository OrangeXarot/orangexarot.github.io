import re
import json

def parse_input(input_text):
    item_pattern = re.compile(r'<p class="item-title">(.*?)<\/p>.*?<p class="r-itemid">(.*?)<\/p>.*?<p class="pickup">(.*?)<\/p>.*?<p class="quality">(.*?)<\/p>.*?Type: (.*?)<\/p>.*?Item Pool: (.*?)<\/p>', re.DOTALL)
    items = item_pattern.findall(input_text)
    
    item_list = []
    for item in items:
        item_info = {
            "title": item[0].strip() if item[0] else None,
            "id": item[1].strip() if item[1] else None,
            "pickup": item[2].strip() if item[2] else None,
            "quality": item[3].strip() if item[3] else None,
            "type": item[4].strip() if item[4] else None,
            "recharge": None,
            "item-pool": item[5].strip() if item[5] else None
        }

        recharge_match = re.search(r'Recharge Time: (\d+.*?)</p>', item[0])
        item_info["recharge"] = recharge_match.group(1) if recharge_match else None

        item_list.append(item_info)

    return {"items": item_list}

# Read input data from a file
file_path = "tboi-items-clean.html"  # Replace with the actual file path
with open(file_path, "r") as file:
    input_data = file.read()

# Parse the input data and generate JSON
output_json = parse_input(input_data)

# Print or save the resulting JSON
output_file_path = "output.json"  # Replace with the desired output file path
with open(output_file_path, "w") as output_file:
    json.dump(output_json, output_file, indent=2)

print(f"JSON saved to {output_file_path}")

