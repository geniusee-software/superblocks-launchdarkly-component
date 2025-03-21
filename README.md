# Feature Flags Demo

A demonstration project showcasing how to implement feature flags in a Superblocks application using LaunchDarkly.

## Overview

This project demonstrates how to integrate LaunchDarkly's feature flag management system with a Superblocks application. The custom component allows you to dynamically show or hide UI elements based on feature flag values configured in LaunchDarkly.

## Project Structure

- **components/LaunchdarklyComponent/**: Custom component for LaunchDarkly integration
  - `component.tsx`: Main component implementation
  - `config.ts`: Component configuration
  - `types.ts`: TypeScript type definitions
  - `utils.ts`: Utility functions for feature flag handling

- **pages/**: Application pages
  - `page1/`: Main application page

- **application.yaml**: Superblocks application configuration

## Features

- Integration with LaunchDarkly for feature flag management
- Dynamic UI component visibility based on feature flag values
- Easy configuration through JSON objects

## Setup and Usage

### Prerequisites

- LaunchDarkly account with Client-Side ID
- Superblocks account

### Installation

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```

### Configuration

1. Add the `LaunchdarklyComponent` component to your Superblocks application
2. Configure the component with your LaunchDarkly Client ID
3. Set up JSON configuration to map feature flags to component IDs

Example configuration:
```json
{
  "feature1": ["ComponentID1", "ComponentID2"],
  "feature2": ["ComponentID3"]
}
```

## Integrating With Your Own Project

To use this feature flags manager in your own Superblocks project:

1. **Copy the Component Files**:
   - Copy the entire `components/LaunchdarklyComponent` directory to your project
   - Ensure you have the required dependencies in your `package.json`:
     ```
     "launchdarkly-react-client-sdk": "^3.6.1"
     ```

2. **Register the Component**:
   - Use the Superblocks CLI to register the component:
     ```
     npx superblocks components register
     ```
   - Alternatively, manually register in the Superblocks UI under Custom Components

3. **Add to Your Application**:
   - Drag and drop the LaunchdarklyComponent component onto your page
   - Configure the LaunchDarkly Client ID in the component properties
   - Set up the feature flag configuration JSON

4. **Set Up LaunchDarkly**:
   - Create feature flags in your LaunchDarkly dashboard
   - Ensure flag keys match the keys in your configuration

5. **Component ID Mapping**:
   - Each component you want to control needs a unique ID
   - Use the format `widget-[id]` in your component's data-test attribute
   - Example: `<div data-test="widget-myButton">...</div>`

6. **Testing Your Setup**:
   - Toggle flags in LaunchDarkly dashboard
   - Verify components show/hide as expected

When a feature flag is turned ON in LaunchDarkly, components mapped to that flag will be HIDDEN.

## How It Works

The `LaunchdarklyComponent` component:
1. Connects to LaunchDarkly using your client ID
2. Retrieves feature flag values from LaunchDarkly
3. Automatically shows/hides UI components based on flag values and your configuration
4. Components are hidden when the corresponding feature flag is enabled

## Development

To modify or extend this demo:

1. Make changes to the component files as needed
2. Run linting:
   ```
   npm run lint
   ```
3. Fix linting issues:
   ```
   npm run lint:fix
   ```

## Dependencies

- `@superblocksteam/custom-components`: Superblocks custom component SDK
- `launchdarkly-react-client-sdk`: LaunchDarkly React integration
- `react`, `react-dom`: React library

## License

This project is intended for demonstration purposes.
