# CANDecoder

## Project Description

Welcome to [CAN Decoder]. This application was primarily developed for decoding a CANlog, but it also encompasses additional features. Here is a comprehensive list of all the supported functionalities:

### Decode CANlog
- Upload CANlog as a file
- Paste/Write log in text input
- Editable max displayed messages
- Overview - Filter CANlog in Overview sidebar
- Cut Log - Specify segment range (e.g., show lines 500-600 of 10000)
- Search - Search by message number, object index, cobID, etc.
- Table - Display log in table format
- Grouping - Group by Modes of Operation, Mapping Objects, or repetitive messages
- Mapping - View recorded mappings in the CANlog
- Filter - the log by AxisIDs or specific message types
- Sort by - All origins, from Master, Mapping related or Errors messages
- Factor Group - Customize the units for POS/SPD/ACC/Time
- GOTO line

### Available Tools
- Programmer Calculator - Convert between decimal, hexadecimal, and binary
- Quick Register tool - Overlays on other menus for quick access
- Quick Conversion tool - Converts between IU and SI, hexadecimal, and Little Endian format for POS/SPD/ACC/Time units
- Edit Data tool - Edit any register or object with the possibility to restore to the default values.
- Data Exchange Tool - A tool that generates the CAN messages for data transfers using objects 2064h/2065h
- XML finder - by typing a firmware version the tool will provide it back in decimal format

### Registers Window
- CANopen / Technosoft Registers
- Up to 3 Register windows
- Hexadecimal or decimal value input
- Update register value real time by clicking on its bits

### Search Tools
- AutoComplete search for CANopen Objects
- AutoComplete search for SDO abort codes
- AutoComplete search for EMCY codes
- AutoComplete search for Technosoft Products
- Search for CobIDs

### Settings Window
- Change Protocol
- General Motor and Drive characteristics
- Factor Group preferences
- Authentication

### Features
- Dark / Light mode
- Supported Protocols: CANopen, RS232
## Recommended IDE Setup
- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
## Project Setup
### Install
```bash
$ npm install
```
### Development
```bash
$ npm run dev
```
### Build
```bash
# For windows
$ npm run build:win
# For macOS
$ npm run build:mac
# For Linux
$ npm run build:linux
```
