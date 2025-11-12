# Dialog UI Problems

## Issues Identified from Screenshot: dialog-ui-problems.png

### 1. **No Visible Backdrop/Overlay**
The dialog likely appears without a proper backdrop overlay, making it unclear that it's a modal dialog and not just floating content on the page.

### 2. **Missing Border/Shadow**
The dialog appears to lack proper visual separation from the background (no border, box-shadow, or card-like appearance).

### 3. **Unstyled Dialog Element**
The native `<dialog>` element is being used but appears to be completely unstyled, resulting in browser default styling which is typically:
- Plain white background
- No padding or minimal padding
- No rounded corners
- No visual hierarchy

### 4. **Poor Button Styling**
The "Close" button likely has minimal or no styling:
- No background color
- No proper padding
- No hover states
- Uses class "btn" which may not be defined in the CSS

### 5. **Content Overflow Issues**
While `maxHeight: '50vh'` is set with `overflow: 'auto'`, the scrollable area may not be visually distinct or have proper styling for the scrollbar.

### 6. **Typography/Spacing Problems**
- The title (h2) may not have adequate spacing/margins
- The ordered list may have default browser styling that doesn't match the app design
- Paragraph spacing within list items may be inconsistent

### 7. **No Visual Hierarchy**
The dialog content lacks proper visual hierarchy:
- Title not prominently displayed
- No distinction between the header, content area, and footer
- All elements appear to have similar visual weight

### 8. **Missing Responsive Design**
The dialog likely doesn't adapt well to different screen sizes (no max-width set, could be too wide on large screens or overflow on small screens).

## Recommended Fixes

1. Add CSS styling for `.terms-dialog` class
2. Include backdrop styling (::backdrop pseudo-element)
3. Add proper spacing, padding, and borders
4. Style the close button properly
5. Improve typography and visual hierarchy
6. Add responsive max-width and proper positioning
7. Include transitions/animations for opening/closing
8. Style the scrollable content area

## Priority
**High** - The dialog is functional but has poor UX due to lack of visual polish.

