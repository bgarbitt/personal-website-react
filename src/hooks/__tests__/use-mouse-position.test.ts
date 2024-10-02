import { renderHook } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useMousePosition } from '../use-mouse-position'

describe('useMousePosition', () => {
  it('returns null coordinates if mouse does not move', () => {
    const { result } = renderHook(() => useMousePosition())
    expect(result.current.mouseX).toBeNull()
    expect(result.current.mouseY).toBeNull()
  })

  // it('returns non-null coordinates if mouse does move', () => {
  //   const { result, rerender } = renderHook(() => useMousePosition())
  //   userEvent.pointer()
  //   rerender()
  //   expect(result.current.mouseX).toBeNull()
  //   expect(result.current.mouseY).toBeNull()
  // })
})
