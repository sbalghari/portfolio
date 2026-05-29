## Goal
Make the dock label for the **active** item flash for ~1 second after it becomes active, then auto-hide. Labels on **hover** should still appear normally and stay while hovered.

## Plan
1. Add a `showActiveLabel` boolean state to `Dock`.
2. Add a `useEffect` keyed on `active`:
   - Set `showActiveLabel = true` immediately when `active` changes.
   - Start a `setTimeout(~1000ms)` to set it back to `false`.
   - Clear the timeout on cleanup to prevent leaks.
3. Update the `expanded` condition from `isActive || isHover` to `(isActive && showActiveLabel) || isHover`.

## File changed
- `src/components/sections/dock.tsx`

No other files need changes.