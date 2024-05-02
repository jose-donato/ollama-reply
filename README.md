# ollama-Reply

> **Disclaimer**: While I generally do not advocate for the use of automated tools for social media interactions, as they can sometimes detract from genuine human engagement, I wanted to build ollama-reply as an experiment. It was an opportunity to explore the capabilities of Ollama and dive into browser extensions.

Ollama-Reply is an open-source Chrome extension that leverages the power of the Ollama Llama3 model to generate smart, engaging replies for social media growth. This tool is designed as a free and open alternative to [MagicReply](https://magicreply.io/).

## Features

- **Open Source** 📖: Freely modify and distribute the code.
- **Powerful AI** 🧠: Uses the Ollama Llama3 model for generating replies.
- **Browser Extension** 🌐: Easy to use directly in your chromium browser.
- **Customizable** ⚙️: Configurable to use any ollama model and adapt the answers to your needs
- **Free** 💸: No cost to download and use the extension.

## Getting Started

### Prerequisites

Before you begin, ensure you have:

- A Chromium based Browser
- Ollama installed - download [here](https://ollama.com/)

### Installation Steps

1. **Set Environment Variable**:
   - Ensure you set the environment variable `OLLAMA_ALLOW_ORIGINS=*` to allow calls from the browser extension.

2. **Pull the AI Model**:
   - Use the command `ollama pull llama3:8b` to download the Llama3 model. You can choose a different model by updating the `background.js` file in the repository.

3. **Download the Repository**:
   - Download the Ollama-Reply repository from GitHub.

4. **Unzip the Repository**:
   - Unzip the downloaded repository to a desired location on your computer.

5. **Load the Extension**:
   - Open Google Chrome (or other chromium browser) and navigate to `chrome://extensions/`.
   - Enable Developer Mode by toggling the switch at the top-right.
   - Click on "Load unpacked" and select the unzipped folder of Ollama-Reply.

## Usage

Once installed, navigate to any post on Twitter or LinkedIn, and you will see an additional button labeled "Generate Reply". Clicking this button will use the Ollama Llama3 model to generate a contextually relevant reply.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

- Fork the Project
- Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
- Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
- Push to the Branch (`git push origin feature/AmazingFeature`)
- Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Project Link: [https://github.com/yourusername/ollama-reply](https://github.com/yourusername/ollama-reply)

## Acknowledgments

- Inspired by [MagicReply](https://magicreply.io/)
- Ollama
