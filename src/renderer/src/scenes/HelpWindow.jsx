import { Header } from '../components/SmallComponents'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import { useState } from 'react'
import { useTheme, Box } from '@mui/material'
import { tokens } from '../theme'
import Accordion from '@mui/material/Accordion'
import WavingHandIcon from '@mui/icons-material/WavingHand'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { HelpRegister } from './global/RegisterWindow'
import { HelpEditDataWindow } from './EditDataWindow'
import DvrIcon from '@mui/icons-material/Dvr'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import CreateIcon from '@mui/icons-material/Create'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import DecodeCANLOG from '../styles/images/DecodeCANLOG.png'
import TableChartIcon from '@mui/icons-material/TableChart'
import pdoDetected from '../styles/images/pdoDetected.png'

const HelpWindow = () => {
  return (
    <>
      <Header
        title="Welcome to Help"
        subtitle="This section contains all the necessary information for correctly utilizing CANDecoder."
      ></Header>
      <ControlledAccordions />
    </>
  )
}

function ControlledAccordions() {
  const [expanded, setExpanded] = useState('2')

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          width: '90%'
        }}
      >
        <AccordionComponent
          expanded={expanded}
          panelNR="1"
          handleChange={handleChange}
          icon={<WavingHandIcon sx={{ zoom: 1.2 }} />}
          title="Welcome"
          subtitle="Welcoming Page"
          body={<HelpWelcomePage />}
        />
        <AccordionComponent
          expanded={expanded}
          panelNR="2"
          handleChange={handleChange}
          icon={<HomeOutlinedIcon sx={{ zoom: 1.2 }} />}
          title="Home"
          subtitle="This menu allows to quickly find some information about a CAN frame"
          body={<HelpHOME_Component />}
        />
        <AccordionComponent
          expanded={expanded}
          panelNR="3"
          handleChange={handleChange}
          icon={<LibraryBooksIcon sx={{ zoom: 1.2 }} />}
          title="Register"
          subtitle=" This component allows you to search any Register and visualize it"
          body={<HelpRegister />}
        />
        <AccordionComponent
          expanded={expanded}
          panelNR="4"
          handleChange={handleChange}
          icon={<CreateIcon sx={{ zoom: 1.2 }} />}
          title="Edit Data Menu"
          subtitle=" This menu allows you to edit any Register or Object"
          body={<HelpEditDataWindow />}
        />
        <AccordionComponent
          expanded={expanded}
          panelNR="5"
          handleChange={handleChange}
          icon={<TableChartIcon sx={{ zoom: 1.2 }} />}
          title="Decode LOG Menu"
          subtitle=" This menu allows you to either paste or upload a CANlog file to decode it"
          body={<HelpDecodeCanMenu />}
        />
        <AccordionComponent
          expanded={expanded}
          panelNR="6"
          handleChange={handleChange}
          icon={<DragIndicatorIcon sx={{ zoom: 1.2 }} />}
          title="More Options Menu"
          subtitle=" This menu allows you to either paste or upload a CANlog file to decode it"
          body={<HelpDecodeCanMenu />}
        />
        <AccordionComponent
          expanded={expanded}
          panelNR="7"
          handleChange={handleChange}
          icon={<TableChartIcon sx={{ zoom: 1.2 }} />}
          title="RS232"
          subtitle=" This menu allows you to either paste or upload a CANlog file to decode it"
          body={<HelpDecodeRS232 />}
        />
      </div>
    </div>
  )
}

export default HelpWindow

function AccordionComponent({ expanded, panelNR, handleChange, icon, body, title, subtitle }) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Accordion
      expanded={expanded === `${panelNR}`}
      onChange={handleChange(`${panelNR}`)}
      sx={{ background: `${colors.primary[300]}`, color: `${colors.primary[600]}` }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{ borderBottom: `1px solid ${colors.yellow[400]} ` }}
      >
        <Typography
          sx={{
            width: '33%',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '1.2rem',
            color: `${colors.yellow[500]}`
          }}
        >
          {icon} {title}
        </Typography>
        <Typography sx={{ color: `${colors.yellow[400]}`, fontSize: '1rem' }}>
          {subtitle}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{body}</AccordionDetails>
    </Accordion>
  )
}

const HelpDecodeCanMenu = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box>
      <section>
        <img src={DecodeCANLOG} alt="Decode CANlog Menu Overview" />
        <br />
        <section style={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
          <div>
            <div>
              <p style={{ fontSize: '1rem' }}>
                <span style={{ color: `${colors.yellow[500]}` }}>[1]</span>{' '}
                <span style={{ color: `${colors.yellow[100]}` }}>
                  - Toggle button between FreeText and Upload File
                </span>
              </p>
              <p>
                There are two primary options. Either the user can write/paste the CANlog or upload
                it as a file{' '}
              </p>
            </div>
            <div>
              <p style={{ fontSize: '1rem' }}>
                <span style={{ color: `${colors.yellow[500]}` }}>[2]</span>{' '}
                <span style={{ color: `${colors.yellow[100]}` }}>- Open Overview</span>
              </p>
              <p>
                The Overview is a sidebar menu which contains all the possible filter options and
                other features
              </p>
            </div>
            <div>
              <p style={{ fontSize: '1rem' }}>
                <span style={{ color: `${colors.yellow[500]}` }}>[3]</span>{' '}
                <span style={{ color: `${colors.yellow[100]}` }}>- Open Search Menu</span>
              </p>
              <p>
                The Search menu allows the user to search through the entire uplaoded CANlog or the
                filtered CANlog based on different filters such as:
              </p>
            </div>
            <ul
              style={{
                color: `${colors.primary[400]}`,
                listStyleType: 'disc',
                display: 'flex',
                gap: '1.5rem',
                marginLeft: '2rem'
              }}
            >
              <li>Message Number</li>
              <li>Object</li>
              <li>Object Name</li>
              <li>CobID</li>
              <li>AxisID</li>
              <li>Data</li>
              <li>Interpretation</li>
              <li>Filtered messages</li>
            </ul>
            <p>
              Also the user has the option to go to a specific line in the CANlog just by clicking
              the "GOTO line" checkbox
            </p>
            <div>
              <p style={{ fontSize: '1rem' }}>
                <span style={{ color: `${colors.yellow[500]}` }}>[4]</span>{' '}
                <span style={{ color: `${colors.yellow[100]}` }}>- Table display options</span>
              </p>
              <p>
                Users can pick between two table display options. The "Default" choice shows the
                main table with all the decoded information. In contrast, the "Debug" option is for
                debugging and displays the algorithm's line-by-line extraction process from the
                CANlog. The table includes four columns: original message, extracted hexadecimal
                data, estimated CobID, and estimated data.
              </p>
            </div>
            <div>
              <p style={{ fontSize: '1rem' }}>
                <span style={{ color: `${colors.yellow[500]}` }}>[5]</span>{' '}
                <span style={{ color: `${colors.yellow[100]}` }}>- Grouping options</span>
              </p>
              <p>
                The CANlog can be grouped by three different options: Modes of Operation, Mapping
                Objects, and Repetitive Messages. After all the filters have been applied to the
                CANlog the algorithm groups the messages based on the selected options.
              </p>
              <li>
                <span style={{ color: `${colors.primary[400]}` }}>Modes of Operation</span> - Once
                there has been detected a Receive message as a SDO or PDO which changes the Modes of
                Operation (6060h) object to a different mode then the remaining messages that follow
                until a new mode is selected will be grouped together. This rule will only apply if
                the frames are coming from the same Axis as the initial frame.
              </li>
              <li>
                <span style={{ color: `${colors.primary[400]}` }}>Mapping Objects</span> - If there
                are any messages which are send as SDOs and the objects to which those messages are
                trying to write has anything to do with mapping and they have the same axisID then
                they will be grouped together.
              </li>
              <li>
                <span style={{ color: `${colors.primary[400]}` }}>Repetitive messages</span> -
                Repetitive messages encompass SYNC, empty lines, invalid messages, and NMT
                monitoring messages. These messages will be grouped together, regardless of their
                axisID, when there are at least 5 consecutive messages of the repetitive type.
              </li>
            </div>
          </div>
          {/* //Second row */}
          <div>
            <div>
              <p style={{ fontSize: '1rem' }}>
                <span style={{ color: `${colors.yellow[500]}` }}>[6]</span>{' '}
                <span style={{ color: `${colors.yellow[100]}` }}>- Maximum displayed messages</span>
              </p>
              <p>
                Because the CANlog can become extensive, the system will cap the displayed messages
                at a maximum of 4000. Users have the flexibility to adjust this limit. If the CANlog
                surpasses the set range, the system will show the initial messages within the range
                and provide buttons to navigate to the next batch of messages.
              </p>
            </div>
            <div>
              <p style={{ fontSize: '1rem' }}>
                <span style={{ color: `${colors.yellow[500]}` }}>[7]</span>{' '}
                <span style={{ color: `${colors.yellow[100]}` }}>- Cut the Log between</span>
              </p>
              <p>
                Essentially, this section slices the log to the specified range, allowing the user
                to interact with a specific segment and not the entire log.
              </p>
            </div>
            <div>
              <p style={{ fontSize: '1rem' }}>
                <span style={{ color: `${colors.yellow[500]}` }}>[8]</span>{' '}
                <span style={{ color: `${colors.yellow[100]}` }}>- Available Axes</span>
              </p>
              <p>
                Once the log is uploaded, the system organizes each message by axis and type. This
                section then shows the message count for each axis and type, and it also works as a
                filter.
              </p>
            </div>
            <div>
              <p style={{ fontSize: '1rem' }}>
                <span style={{ color: `${colors.yellow[500]}` }}>[9]</span>{' '}
                <span style={{ color: `${colors.yellow[100]}` }}>- Sort By</span>
              </p>
              <p>This radio buttons offer more filtering options, such as:</p>
              <li>
                <span style={{ color: `${colors.primary[400]}` }}>All</span> - No filter applied
              </li>
              <li>
                <span style={{ color: `${colors.primary[400]}` }}>Master</span> - This filter option
                will display all the messages that are sent from the Master to the slave axes. All
                Receive PDO, Receive SDO and NMT.
              </li>
              <li>
                <span style={{ color: `${colors.primary[400]}` }}>Mapping</span> - This filter
                option will show all the SDO messages that are reading/writing to mapping objects.
              </li>
              <li>
                <span style={{ color: `${colors.primary[400]}` }}>Errors</span> - This filter option
                will show all the messages which the system considers as an error. So any SDO abort
                messages, emergency messages, or invalid messages.
              </li>
            </div>
            <div>
              <p style={{ fontSize: '1rem' }}>
                <span style={{ color: `${colors.yellow[500]}` }}>[10]</span>{' '}
                <span style={{ color: `${colors.yellow[100]}` }}>- Decode button</span>
              </p>
              <p>
                This button will start the decoding process. It will apply all the above mentioned
                filters and will display the results in the table.
              </p>
            </div>
            <div>
              <p style={{ fontSize: '1rem' }}>
                <span style={{ color: `${colors.yellow[500]}` }}>[11]</span>{' '}
                <span style={{ color: `${colors.yellow[100]}` }}>- Show mapping button</span>
              </p>
              <p>
                This button will open a dialog window where all the mapping that has been recorded
                in the log will be displayed.
              </p>
            </div>
          </div>
        </section>
        <br />
        <section style={{ display: 'grid', gridTemplateColumns: '40% 60%', gap: '1rem' }}>
          <div>
            <img src={pdoDetected} alt="PDO detected" width="500px" height="500px" />
          </div>
          <div>
            <p style={{ fontSize: '1rem', marginBottom: '0.7rem' }}>
              <span style={{ color: `${colors.yellow[100]}` }}>PDO has been detected window</span>
            </p>
            <p>
              Once a PDO message has been detected and the system doesn`t know what objects have
              been mapped, then the window on the left will appear. Here the user has multiple
              options, such as:
            </p>

            <ul
              style={{
                listStyleType: 'disc',
                marginLeft: '2rem'
              }}
            >
              <li>
                <span style={{ color: `${colors.primary[400]}` }}>User input</span> - The user needs
                to input the objects that have been mapped for that specific PDO for that specific
                axis.
              </li>
              <li>
                <span style={{ color: `${colors.primary[400]}` }}>Default objects</span> - When
                clicking this button the system will automatically fill the objects that, by
                default, are mapped to that specific PDO. Usually when there is a log and there is
                no information about mapping, then most likely there wasn`t any mapping done. The
                checkbox next to it will set for the remaining 126 posible axes the same objects for
                that specific PDO.
              </li>
              <li>
                <span style={{ color: `${colors.primary[400]}` }}>Set compatible objects</span> -
                The system will fill out random objects that correspond perfectly to the message
                length. This option is not recommended becuase it will give false information about
                the log. The checkbox next to it will make sure to fill out all the remaining PDO
                messages with random objects.
              </li>
              <li>
                <span style={{ color: `${colors.primary[400]}` }}>Leave empty</span> - The system
                will ignore this PDO message and later in the table it will be displayed as unknown
                objects. This is reccomended when the user has no idea what objects have been mapped
                to that specific PDO. The checkbox next to it will make sure to leave empty all the
                remaining PDO messages.
              </li>
              <li>
                <span style={{ color: `${colors.primary[400]}` }}>
                  I know data doesn`t match, proceed...
                </span>{' '}
                - In certain situations, differences may arise between the expected data length and
                the actual length of a message. If a user is confident that, for instance, only 2
                bytes of information should be utilized, but the received message contains 4 bytes,
                they can opt for this feature
              </li>
            </ul>
            <p style={{ marginTop: '0.7rem' }}>
              This window will appear only if there is no mapping registered. If there is some
              mapping done then no options from this window will affect it. Also, it`s important to
              note that if in the future there are some messages which are trying to map something
              different, then the changes will be applied for the remaining messages.
            </p>
          </div>
        </section>
      </section>
      <section>
        <Typography variant="h3">Algorithm Description:</Typography>

        <h4>
          This algorithm processes text input line by line, assuming each line contains valid CAN
          messages. The goal is to extract two parts from each line: the CobID (identifier) and the
          frame itself.
        </h4>
        <br />
        <Typography variant="h5">1. Parsing:</Typography>
        <ul style={{ listStyleType: 'disc', marginLeft: '2rem' }}>
          <li>{`The algorithm starts by parsing the first line, splitting strings based on symbols like: single quote (" ' "), double-quote (""), comma (" , ") , arrows("< ,>"),  empty-spaces.`}</li>
          <li>
            It then filters out non-hexadecimal numbers, considering only those expressed in
            hexadecimal format (e.g. '2B', 'aBc', '0x2B').
          </li>
        </ul>
        <Typography variant="h5">2. CAN Message Structure:</Typography>
        <ul style={{ listStyleType: 'disc', marginLeft: '2rem' }}>
          <li>
            A typical CAN message has a CobID with three characters followed by a single digit
            representing the message length and finally the message content.
          </li>
          <li>
            The message will have an even nr of characters dived 2 by 2. However, variations exist
            due to different data recording tools.
          </li>
        </ul>
        <Typography variant="h5">3. CobID Extraction:</Typography>
        <ul style={{ listStyleType: 'disc', marginLeft: '2rem' }}>
          <li>
            The system identifies potential CobIDs by considering strings with a length greater than
            2 digits as possible candidates
          </li>
          <li>
            It counts the occurrences of characters with lengths 1 or 2, assuming the CobID with the
            most potential 'data' is the correct one.
          </li>
        </ul>
        <Typography variant="h5">4. Message Length Verification:</Typography>
        <ul style={{ listStyleType: 'disc', marginLeft: '2rem' }}>
          <li>
            The system checks if the next character from the selected CobID is a string of length 1,
            representing the length of the message to follow.
          </li>
          <li>
            If the length character is present, the algorithm verifies it. If the length matches,
            the data from the row is successfully extracted. If not, the algorithm re-parses the
            row, looking for all the potential message lengths.
          </li>
        </ul>
        <Typography variant="h5">5. Message Length Verification:</Typography>

        <ul style={{ listStyleType: 'disc', marginLeft: '2rem' }}>
          <li>
            If multiple potential message lengths exist, the algorithm tests each length with the
            corresponding message. The first one that matches is considered correct.
          </li>
          <li>
            Each potential CobID undergoes a validation function, and if successful, the algorithm
            chooses the new CobID and message, disregarding previous findings.
          </li>
          <li>
            If none of the potential lengths check out, the first CobID found is considered correct,
            and the algorithm moves to the next line.
          </li>
        </ul>
        <b>Note: </b>
        <p>
          It is crucial to double-check the extracted CobID and message before trusting how the
          system interpreted the message, as the algorithm may not cover all possible variations.
        </p>
      </section>

      {/* Shortcuts */}
      <br />
      <br />
      <section>
        <p>
          <span className="primaryColor">" ALT + 3 "</span> - Open the Decode LOG menu
        </p>
        <p>
          <span className="primaryColor"> " CTRL + ` " </span> - Open the Overview sidebar
        </p>
        <p>
          <span className="primaryColor"> " CTRL + f " </span> - Open the Advanced Search
        </p>
        <p>
          <span className="primaryColor"> " CTRL + g " </span> - Open GOTO menu
        </p>
        <p>
          <span className="primaryColor"> " CTRL + ENTER " </span> - Process the log in the TextArea
          or display table if Overview opened
        </p>
      </section>
    </Box>
  )
}

const HelpHOME_Component = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box>
      <section>
        <Typography variant="h4" sx={{ color: `${colors.yellow[400]}`, mb: '0.5rem' }}>
          Search Bar
        </Typography>
        <ul style={{ listStyleType: 'disc', marginLeft: '2rem' }}>
          <li>
            <b>CANopen Objects</b>- User can search through list of all the supported CANopen
            objects from Technosoft. The system supports a case-insensitive search, allowing users
            to locate specific objects by index, name, or size.
          </li>
          <li>
            <b>Abort Codes</b> - In the event of an error occuring during the transmission of an SDO
            message, an Abort SDO message is sent which contains a specific code. Users can search
            for these codes by either the code number or code description.
          </li>
          <li>
            <b>Emergency Errors</b>- a list of all the error codes.
          </li>
        </ul>
        <br />
        <Typography variant="h4" sx={{ color: `${colors.yellow[400]}`, mb: '0.5rem' }}>
          Quick Conversion
        </Typography>
        <ul style={{ listStyleType: 'disc', marginLeft: '2rem' }}>
          <li>
            This component is designed to execute transformations from IU (Drive's internal units)
            to SI or vici versa. Prior to utilizing this menu, users need to configure the
            transmission type, define the counts equivalent of 1 rotation or 1 meter (depending on
            the transmission type), and define the period of one slow loop. These settings are
            accessible in the "General Settings" section within the Settings Window.
          </li>
          <li>
            The main purpose of this component is to quickly find out what is the equivalent value
            of, for example, one rotation in hexadecimal or Little Endian format to either quickly
            decipher or encode a CAN message
          </li>
        </ul>

        <br />
        <Typography variant="h4" sx={{ color: `${colors.yellow[400]}`, mb: '0.5rem' }}>
          COB-ID Search
        </Typography>
        <ul style={{ listStyleType: 'disc', marginLeft: '2rem' }}>
          <li>
            This component enables users to search for any CobID, providing information on the
            message type and the corresponding Axis from which the message originates.
          </li>
        </ul>
      </section>
    </Box>
  )
}
const HelpDecodeRS232 = () => {
  return (
    <Box>
      <ul>
        <li>- Checks checksum</li>
        <li>
          - Checks datalength. It doesn`t matter if length is in the same frame or the previous one.
          If the first byte isnt the correct length of the frame then the program looks at the
          previous frame and if even that doesn`t match then the message will report an error
        </li>
        <li>Checks if the axisID code is wrong</li>
      </ul>
    </Box>
  )
}

const HelpMoreOptionsWindow = () => {
  return (
    <Box>
      <ul>
        <li>- Checks checksum</li>
        <li>
          - Checks datalength. It doesn`t matter if length is in the same frame or the previous one.
          If the first byte isnt the correct length of the frame then the program looks at the
          previous frame and if even that doesn`t match then the message will report an error
        </li>
        <li>Checks if the axisID code is wrong</li>
      </ul>
    </Box>
  )
}
export const HelpWelcomePage = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box>
      <Typography variant="h2" sx={{ color: `${colors.yellow[400]}`, mb: '0.5rem' }}>
        Welcome to <b style={{ color: `${colors.primary[400]}` }}>CAN</b>
        <b style={{ color: `${colors.red[500]}` }}>Decoder</b>
      </Typography>
      <p>
        This application was primarily developed for decoding a CANlog, but it also encompasses
        additional features. Here is a comprehensive list of all the supported functionalities:
      </p>
      <ul>
        <li>- Checks checksum</li>
        <li>
          - Checks datalength. It doesn`t matter if length is in the same frame or the previous one.
          If the first byte isnt the correct length of the frame then the program looks at the
          previous frame and if even that doesn`t match then the message will report an error
        </li>
        <li>Checks if the axisID code is wrong</li>
      </ul>
    </Box>
  )
}
