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

// -------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------

const React_Logic2 = () => {
  return (
    <>
      <Header title="React Logic 2" />
    </>
  )
}

export default React_Logic2
