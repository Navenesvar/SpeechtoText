# VoiceToTextTranslator

VoiceToTextTranslator is a Python-based project that translates English voice input into text output in various languages. This project utilizes libraries such as `googletrans`, `speech_recognition`, `pyaudio`, and `gtts` to achieve this functionality.

## Features

- Translates spoken English into text in any specified language.
- Supports a wide range of languages for translation.
- Converts translated text to speech and saves it as an audio file.

## Requirements

- Python 3.x
- `googletrans`
- `speech_recognition`
- `pyaudio`
- `gtts`
- `playsound`

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/VoiceToTextTranslator.git
    cd VoiceToTextTranslator
    ```

2. Install the required Python packages:
    ```bash
    pip install googletrans==4.0.0-rc1 speechrecognition pyaudio gtts playsound
    ```

## Usage

1. Run the script:
    ```bash
    python translate.py
    ```

2. Follow the prompt to speak into your microphone. The script will capture your voice, translate it into the specified language, and output the translated text.

## Example

Here's an example of how the script works:

1. When prompted, speak the following sentence: "Your attention please train number 12634 Kanyakumari Express will leave from platform number 1 at 17:20 thank you."
2. The script captures your voice, transcribes it to text, translates the text to Tamil (or any specified language), and outputs:
    ```text
    உங்கள் கவனத்திற்கு 12634 கன்னியாகுமரி எக்ஸ்பிரஸ் இயங்குதள எண் 1 இலிருந்து 17:20 மணிக்கு புறப்படும்
    ```
3. The translated text is also converted to speech and saved as `output.mp3`.

## Contributing

Contributions are welcome! Please create an issue or submit a pull request for any feature requests, bug fixes, or improvements.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Acknowledgements

- [Googletrans](https://py-googletrans.readthedocs.io/en/latest/) for language translation.
- [SpeechRecognition](https://pypi.org/project/SpeechRecognition/) for voice recognition.
- [PyAudio](http://people.csail.mit.edu/hubert/pyaudio/) for accessing the microphone.
- [gTTS](https://pypi.org/project/gTTS/) for converting text to speech.
- [IPython.display.Audio](https://ipython.readthedocs.io/en/stable/api/generated/IPython.display.html#IPython.display.Audio) for audio playback.
