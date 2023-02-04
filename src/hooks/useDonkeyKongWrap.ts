import { RefCallback, useEffect, useState } from 'react'
import { useInputEvent } from './useInputEvent'
import { SwipeEventData, useSwipeable } from 'react-swipeable'

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA']

const gesturesToKey = {
  Left: 'ArrowLeft',
  Right: 'ArrowRight',
  Up: 'ArrowUp',
  Down: 'ArrowDown'
}
export const useDonkeyKongWrap = () => {
  const [count, setCount] = useState(0)
  const [success, setSuccess] = useState({ success: false, showKeyboard: false })
  const [action, setAction] = useState<string | null>()
  const key = useInputEvent()
  const [isSwiping, setIsSwiping] = useState(false)

  useEffect(() => {
    setAction(key)
  }, [key])

  const handleSwiped = (eventData: SwipeEventData) => {
    setIsSwiping(true)
    if (gesturesToKey[eventData.dir]) {
      setAction(gesturesToKey[eventData.dir])
    }
  }

  const { ref } = useSwipeable({
    onSwiped: handleSwiped,
    onTouchStartOrOnMouseDown: ({ event }) => {
      /*nothing */
    },
    touchEventOptions: { passive: false },
    preventScrollOnSwipe: false,
    trackMouse: false
  }) as { ref: RefCallback<Document> }

  useEffect(() => {
    ref(document)
  })

  useEffect(() => {
    if (action == null) return

    if (isSwiping && count + 1 === 8) {
      setSuccess({ success: false, showKeyboard: true })
      setCount(0)
      return
    }

    if (action !== konamiCode[count]) {
      setCount(0)
      setSuccess({ success: false, showKeyboard: false })
      return
    }

    setCount((state) => state + 1)
    if (count + 1 === konamiCode.length) {
      setSuccess({ success: true, showKeyboard: false })
      setCount(0)
    }
    setAction(null)
  }, [action])

  return success
}
