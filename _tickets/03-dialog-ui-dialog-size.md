# Dialog Size Problems

## Issues Identified from Screenshot: dialog-ui-problems.png

### 1. **No Maximum Width Constraint**
The dialog element has no `max-width` set, which means:
- On large screens, the dialog could stretch too wide, making it hard to read
- Text lines become too long, reducing readability (optimal line length is 50-75 characters)
- The dialog loses its focused, modal appearance

### 2. **No Minimum Width Constraint**
Without a `min-width` property:
- On very small screens, the dialog might become too narrow
- Content could wrap awkwardly
- Buttons and UI elements might appear cramped

### 3. **Fixed Height Issues**
The content area uses `maxHeight: '50vh'`:
- **Problem**: On small screens or mobile devices, 50vh might be too restrictive
- The actual dialog height is not controlled, only the scrollable content area
- No consideration for very tall screens where the dialog could have more breathing room

### 4. **No Width Specification**
The dialog has no explicit width property:
- Relies entirely on browser defaults
- Width is unpredictable and inconsistent across different screen sizes
- Cannot ensure optimal reading experience

### 5. **Missing Responsive Breakpoints**
No responsive design considerations:
- Same sizing for mobile, tablet, and desktop
- No adjustments for portrait vs landscape orientation
- Could overflow or be too small on various devices

### 6. **No Viewport Consideration**
The dialog doesn't account for viewport dimensions:
- Could exceed viewport height on small screens
- No padding/margin from viewport edges
- Risk of content being cut off or requiring page scroll (not just dialog scroll)

## Recommended Size Specifications

### Desktop (Large Screens)
- `max-width: 600px` or `700px`
- `max-height: 80vh` or `90vh`
- Centered positioning

### Tablet
- `max-width: 90vw`
- `max-height: 85vh`

### Mobile
- `max-width: 95vw`
- `max-height: 90vh`
- Smaller padding/margins

### General
- Set explicit width: `width: min(600px, 90vw)`
- Content area height: `max-height: calc(90vh - 120px)` (accounting for header and footer)
- Add margin from viewport edges: `margin: 20px` or similar

## Priority
**High** - Size issues significantly impact usability across different devices and screen sizes.

