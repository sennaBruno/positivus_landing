# Typography and Style Guide

This document outlines the typography and color styles from the Figma design implemented with explicit styling.

## Typography System

All typography follows these styles from the Figma design:

| Element | Font Family | Weight | Size | Line Height | Letter Spacing |
|---------|------------|--------|------|-------------|----------------|
| H1      | Space Grotesk | 500 (Medium) | 60px | 100% | 0% |
| H2      | Space Grotesk | 500 (Medium) | 40px | 100% | 0% |
| H3      | Space Grotesk | 500 (Medium) | 30px | 100% | 0% |
| H4      | Space Grotesk | 500 (Medium) | 20px | 100% | 0% |
| P       | Space Grotesk | 400 (Regular) | 18px | 100% | 0% |
| P Large | Space Grotesk | 400 (Regular) | 20px | 28px | 0% |

## Color Palette

| Color Name | Hex Value | Description |
|------------|-----------|-------------|
| Green      | #B9FF66   | Primary brand color |
| Dark       | #191A23   | Dark text and backgrounds |
| White      | #F3F3F3   | Light text and backgrounds |
| Black      | #000000   | Black text and UI elements |

## How to Use

Import the typography utilities in your components:

```tsx
import { typography, colors, combinedStyles } from '@/styles/typography';
```

### Basic Usage

```tsx
<h1 className={typography.h1}>This is a heading</h1>
<p className={typography.p}>This is a paragraph</p>
<p className={typography.pLarge}>This is a larger paragraph</p>
```

### With Colors

```tsx
<h1 className={`${typography.h1} ${colors.green}`}>Green Heading</h1>
<p className={`${typography.p} ${colors.dark}`}>Dark Paragraph</p>
```

### Using Combined Styles

```tsx
<h1 className={combinedStyles.h1Green}>Green Heading (combined)</h1>
```

### Background Colors

```tsx
<div className={colors.bgGreen}>Green Background</div>
<div className={colors.bgDark}>Dark Background</div>
```

## Implementation Details

Typography styles are implemented with explicit CSS values rather than Tailwind utility classes to ensure exact matching with the Figma design:

```typescript
export const typography = {
  h1: 'font-sans font-medium text-[60px] leading-[100%] tracking-[0%]',
  h2: 'font-sans font-medium text-[40px] leading-[100%] tracking-[0%]',
  // ...
};
```

## Example Component

Check out the `TypographyExample.tsx` component in the examples folder to see the implementation in action. 