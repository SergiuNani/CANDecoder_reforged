import { Header } from '../components/SmallComponents'
import { Typography } from '@mui/material'
import { useState, useRef, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'
import {
  Input_AutoFormat,
  AutocompleteInput_AllObjects,
  Input_ChooseOption
} from '../components/ForumsComponents'
import { filterHex, filterDecimal, filterDecimalWithComma } from '../functions/NumberConversion'
import RegisterComponent from '../components/Register'
import { Registers_THS_LS } from '../App'
import { Types_of_CANopenMsgs_array } from '../data/SmallData'
// -------------------------------------------------------------------------------------------------------------
function Element22() {
  return (
    <div className="border danger">
      <Typography variant="h3" className="text-indigo-300">
        Element 22 - onHOVER modal - useLayoutEffect)
      </Typography>

      <ButtonWithTooltip
        tooltipContent={
          <div>
            This tooltip does not fit above the button.
            <br />
            This is why it's displayed below instead! This is why it's displayed below instead! This
            is why it's displayed below instead! This is why it's displayed below instead! This is
            why it's displayed below instead! This is why it's displayed below instead! This is why
            it's displayed below instead!
          </div>
        }
      >
        Hover over me (tooltip above)
      </ButtonWithTooltip>
      <div style={{ height: 50 }} />
      <ButtonWithTooltip tooltipContent={<div>This tooltip fits above the button</div>}>
        Hover over me (tooltip below)
      </ButtonWithTooltip>
      <div style={{ height: 50 }} />
      <ButtonWithTooltip tooltipContent={<div>This tooltip fits above the button</div>}>
        Hover over me (tooltip below)
      </ButtonWithTooltip>
    </div>
  )
}
function ButtonWithTooltip({ tooltipContent, ...rest }) {
  const [targetRect, setTargetRect] = useState(null)
  const buttonRef = useRef(null)
  return (
    <>
      <button
        {...rest}
        ref={buttonRef}
        onPointerEnter={() => {
          const rect = buttonRef.current.getBoundingClientRect()
          setTargetRect({
            left: rect.left,
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom
          })
        }}
        onPointerLeave={() => {
          setTargetRect(null)
        }}
      />
      {targetRect !== null && <Tooltip targetRect={targetRect}>{tooltipContent}</Tooltip>}
    </>
  )
}
function Tooltip({ children, targetRect }) {
  const ref = useRef(null)
  const [tooltipHeight, setTooltipHeight] = useState(0)

  useLayoutEffect(() => {
    const { height } = ref.current.getBoundingClientRect()
    setTooltipHeight(height)
  }, [])

  let tooltipX = 0
  let tooltipY = 0
  if (targetRect !== null) {
    tooltipX = targetRect.left
    tooltipY = targetRect.top - tooltipHeight
    if (tooltipY < 0) {
      // It doesn't fit above, so place below.
      tooltipY = targetRect.bottom
    }
  }

  return createPortal(
    <TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
      {children}
    </TooltipContainer>,
    document.body
  )
}

function TooltipContainer({ children, x, y, contentRef }) {
  return (
    <div
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        left: 0,
        top: 0,
        transform: `translate3d(${x}px, ${y}px, 0)`
      }}
    >
      <div ref={contentRef} className="tooltip">
        {children}
      </div>
    </div>
  )
}

// -------------------------------------------------------------------------------------------------------------

const TestWindow = () => {
  return (
    <div className="border1 flex">
      <Typography variant="h3">TestWINDOW</Typography>
      <RegisterComponent register={Registers_THS_LS[10]} value={1234} />
      {/* ------------------------------------------------ */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}
      >
        <AutocompleteInput_AllObjects
          placeholder="search object"
          title="SDO object one foffffffffffffffffffffffffffffffffffr the..."
        />
        <AutocompleteInput_AllObjects title="MANAAAAAAAA" />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}
      >
        <Input_AutoFormat
          placeholder="FilterHex 16"
          title="FilterHex 16"
          callback={filterHex}
          resolution="16"
        />
        <Input_AutoFormat
          placeholder="FilterHex 16"
          title="FilterHex 32"
          callback={filterHex}
          resolution="32"
        />
        <Input_AutoFormat
          placeholder="FilterHex 0"
          title="FilterHex 0"
          callback={filterHex}
          resolution="0"
        />
        <Input_AutoFormat
          placeholder="filterDecimal 0"
          title="filterDecimal 0"
          callback={filterDecimal}
          resolution="0"
        />
        <Input_AutoFormat
          placeholder="filterDecimal 16"
          title="filterDecimal 16"
          callback={filterDecimal}
          resolution="16"
        />
        <Input_AutoFormat
          placeholder="filterDecimal 32"
          title="filterDecimal 32"
          callback={filterDecimal}
          resolution="32"
        />
        <Input_AutoFormat
          placeholder="filterDecimalWithComma 32"
          title="filterDecimalWithComma 32"
          callback={filterDecimalWithComma}
          resolution="32"
        />
        <Input_AutoFormat
          placeholder="filterDecimalWithComma 16"
          title="filterDecimalWithComma 16"
          callback={filterDecimalWithComma}
          resolution="16"
        />

        <Input_AutoFormat
          placeholder="filterDecimalWithComma 0"
          title="filterDecimalWithComma 0"
          callback={filterDecimalWithComma}
          resolution="0"
        />
        <Input_AutoFormat
          placeholder="XXXXfilterDecimalWithComma 0"
          title="XXXfilterDecimalWithComma 0"
          callback={filterDecimalWithComma}
          resolution="0"
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Input_ChooseOption
          title="xxxSDO object one foffffffffffffffffffffffffffffffffffr the..."
          options={Types_of_CANopenMsgs_array}
        />

        <Input_ChooseOption title="MANAAAAAAAA" options={Types_of_CANopenMsgs_array} />
      </div>
    </div>
  )
}

// -------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------

const React_Logic2 = () => {
  return (
    <>
      <Header title="React Logic 2" />
      <TestWindow />
    </>
  )
}

export default React_Logic2
