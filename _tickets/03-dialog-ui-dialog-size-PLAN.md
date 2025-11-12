# Plan to Fix Dialog Size Problems

## Step 1: Add Base Dialog Width
Set explicit width using `min()` function: `width: min(600px, 90vw)`.
This ensures dialog is readable on large screens but responsive on small screens.

## Step 2: Set Maximum Width
Add `max-width: 700px` to prevent dialog from becoming too wide.
Ensures optimal reading line length (50-75 characters).

## Step 3: Set Minimum Width
Add `min-width: 320px` to prevent dialog from being too narrow.
Ensures buttons and content don't become cramped.

## Step 4: Fix Dialog Height
Set `max-height: 90vh` on the dialog element itself.
This prevents dialog from exceeding viewport height.

## Step 5: Adjust Content Area Height
Change content area from `maxHeight: '50vh'` to `max-height: calc(80vh - 120px)`.
Accounts for header and footer while leaving room for viewport margins.

## Step 6: Add Viewport Margins
Add `margin: 20px auto` to create space from viewport edges.
Ensures dialog doesn't touch screen edges on any device.

## Step 7: Create CSS Class for Dialog Sizing
Move inline styles to CSS class `.terms-dialog` for better maintainability.
Include all width, height, and margin specifications.

## Step 8: Add Mobile Media Query
Create `@media (max-width: 768px)` breakpoint for mobile devices.
Adjust margins to `margin: 10px auto` and increase width to `95vw`.

## Step 9: Add Tablet Media Query
Create `@media (min-width: 769px) and (max-width: 1024px)` for tablets.
Set `max-width: 90vw` and `max-height: 85vh` for better tablet experience.

## Step 10: Test Responsive Behavior
Test dialog on different screen sizes (mobile, tablet, desktop).
Verify scrolling works and dialog stays within viewport boundaries.

