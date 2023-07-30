import requests
from bs4 import BeautifulSoup
import xml.etree.ElementTree as ET

def get_description(url):
    # Fetch the content of the URL
    response = requests.get(url)
    if response.status_code != 200:
        return None

    # Parse the HTML content and extract the description
    soup = BeautifulSoup(response.content, 'html.parser')
    # Modify this line to find the specific HTML element containing the description
    description = soup.find('meta', attrs={'name': 'description'})['content']
    return description

def update_xml(xml_file):
    tree = ET.parse(xml_file)
    root = tree.getroot()

    for url_element in root.findall('www.logitech.com/en-in'):
        url = url_element.text.strip()
        description = get_description(url)
        if description:
            # Append the description as a new XML element
            description_element = ET.Element('description')
            description_element.text = description
            url_element.append(description_element)

    # Save the updated XML file
    tree.write(xml_file)

if __name__ == "__main__":
    xml_file_path = './debug/sitemap.xml'
    update_xml(xml_file_path)
