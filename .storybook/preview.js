import {DocsContainer, DocsPage} from '@storybook/addon-docs/blocks';
import {withTests} from '@storybook/addon-jest';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import {addDecorator, addParameters} from '@storybook/react';
import {create, themes} from '@storybook/theming';
import {withPerformance} from 'storybook-addon-performance';
import {withThemes} from 'storybook-addon-themes/react';
import results from '../coverage/jest-test-results.json';
import '../src/styles/tailwind.scss';
import './main.css';

// Allow Storybook to handle Next's <Image> component
// const OriginalNextImage = NextImage.default;

// Object.defineProperty(NextImage, 'default', {
//   configurable: true,
//   value: (props) => <OriginalNextImage {...props} unoptimized />,
// });

const theme = create({
  base: 'dark',
  brandTitle: 'serasi',
});

const createViewport = (name, width, height, type = 'desktop') => ({
  name,
  styles: {
    width: `${width}px`,
    height: `${height}px`,
  },
  type,
});

const newViewports = {
  viewportS: createViewport('S', 320, 568, 'mobile'),
  viewportM: createViewport('M', 640, 568, 'tablet'),
  viewportL: createViewport('L', 1024, 568),
  viewportXL: createViewport('XL', 1280, 568),
};

addDecorator(withPerformance);
addDecorator(withThemes);
addDecorator(
  withTests({
    results,
  })
);

addParameters({
  a11y: {
    config: {},
    options: {
      checks: {'color-contrast': {options: {noScroll: true}}},
      restoreScroll: true,
    },
  },
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {expanded: true},
  options: {
    showAddonsPanel: true,
    panelPosition: 'bottom',
    storySort: {
      // method: 'alphabetical',
      order: ['Welcome', ['Introduction', 'Getting Started', 'Contribution Guides'], 'Components'],
    },
    theme,
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
    theme: themes.light,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  canvas: {
    theme: themes.light,
  },
  viewport: {
    viewports: {
      ...newViewports,
      ...INITIAL_VIEWPORTS,
    },
  },
});

// export const parameters = {
//   actions: {argTypesRegex: '^on[A-Z].*'},
//   options: {
//     showAddonsPanel: true,
//     panelPosition: 'bottom',
//     storySort: {
//       method: 'alphabetical',
//     },
//     theme,
//   },
//   docs: {
//     container: DocsContainer,
//     page: DocsPage,
//     theme: themes.light,
//   },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
//   canvas: {
//     theme: themes.dark,
//   },
//   viewport: {
//     viewports: {
//       ...newViewports,
//       ...INITIAL_VIEWPORTS,
//     },
//   },
// };
