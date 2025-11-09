# Klikkit UI Components

shadcn-style components built with your custom color palette.

## Components

### Button
A versatile button component with multiple variants and sizes.

```tsx
import { Button } from "@/components/ui"

// Variants
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="accent">Accent</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Destructive</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">🚀</Button>
```

### Card
A flexible card component with header, content, and footer sections.

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui"

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Input
A styled input component with focus states.

```tsx
import { Input } from "@/components/ui"

<Input placeholder="Enter text..." />
<Input type="email" placeholder="your@email.com" />
<Input type="password" placeholder="Password" />
```

## Color Palette

- **Primary (Teal)**: `primary-50` to `primary-900`
- **Accent (Blue)**: `accent-50` to `accent-900`

## Demo

Visit `/components-demo` to see all components in action with your color palette.
