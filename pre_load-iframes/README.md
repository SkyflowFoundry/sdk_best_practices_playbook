# Skyflow Elements Demo with iFrame Pre-loading

This project demonstrates the use of Skyflow Elements to securely collect and reveal Payment Card Industry (PCI) data, with a focus on optimizing performance through iFrame pre-loading.

## Overview

The demo consists of a single HTML page that integrates with Skyflow Elements to handle sensitive credit card data. It showcases an advanced technique for improving user experience by pre-loading iFrames.

### Key Feature: iFrame Pre-loading

A core highlight of this demo is the implementation of iFrame pre-loading:

- iFrames are rendered hidden when the page initially loads.
- They are displayed only when required, based on user interaction.
- This technique significantly reduces perceived latency and ensures a smooth user experience.

### How it Works

1. On initial page load, all Skyflow Elements iFrames are rendered but kept hidden.
2. When the user acknowledges and proceeds to data entry, the pre-loaded iFrames are simply made visible.
3. This results in an instant display of the form fields, eliminating waiting time for iFrame loading.

### Benefits

- Significantly reduced perceived latency
- Smooth and responsive user interactions
- Enhanced overall user experience
- Improved performance metrics

### Other Features

- User acknowledgment before data collection
- Secure collection of credit card details (number, CVV, expiry date, cardholder name)
- Reveal functionality for displaying collected data
- Responsive design

## Prerequisites

- Basic understanding of HTML, CSS, and JavaScript
- Skyflow account and API credentials (not included in this demo)

## Setup

1. Clone this repository to your local machine.
2. Ensure you have the necessary Skyflow credentials and have set up your Skyflow vault.
3. Update the `index.js` file with your Skyflow configuration.

## Usage

1. Open the HTML file in a web browser.
2. Notice the instant load time due to pre-loaded iFrames.
3. Click the **"Yes, I Acknowledge"** button to reveal the data collection form.
4. Observe the smooth transition as pre-loaded iFrames become visible.
5. Enter the required credit card information.
6. Click **"Collect PCI Data"** to securely send the data to Skyflow.
7. Use the **"Reveal PCI Data"** button to display the collected information.

## File Structure

- `index.html`: Main HTML file containing the user interface and pre-loading logic
- `index.js`: JavaScript file for Skyflow Elements integration and iFrame management

## Implementation Details

The key to this implementation is in the HTML structure and JavaScript:

- In `index.html`, Skyflow Elements containers are initially created with a hidden class.
- The acknowledgment button's click event listener changes the class to visible.
- Skyflow Elements are initialized on page load, rendering iFrames in hidden containers.

## Styling

The demo uses minimal CSS for layout and visibility toggling. Key classes include:

- `.hidden`: Sets `display: none` for pre-loaded, hidden elements
- `.visible`: Sets `display: block` to reveal elements when needed

## Security Notes

This demo is for educational purposes only and should not be used in production without proper security measures.

- Ensure all communications are done over HTTPS.
- Follow Skyflow's best practices and security guidelines when implementing in a real-world scenario.

## Performance Considerations

While pre-loading iFrames improves user experience, consider the following:

- Initial page load time may slightly increase due to loading all iFrames upfront.
- This approach is most beneficial for applications where quick interaction with the form is crucial.
- Monitor and optimize the balance between pre-loading and overall page performance.

## Further Development

To expand this demo:

- Implement error handling and validation.
- Enhance the user interface with better styling and responsiveness.
- Add more Skyflow Elements features as needed.
- Implement progressive loading for scenarios with numerous iFrames.

## Support

For issues related to Skyflow Elements, please refer to the [official Skyflow documentation](https://docs.skyflow.com) or contact their support team.

## Disclaimer

This demo is not an official Skyflow product. It's an implementation to demonstrate the concept of using Skyflow Elements for PCI data handling with a focus on performance optimization through iFrame pre-loading.
