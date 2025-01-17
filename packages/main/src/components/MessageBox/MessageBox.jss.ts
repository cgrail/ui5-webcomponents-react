import { ContentDensity } from '@ui5/webcomponents-react/lib/ContentDensity';
import { JSSTheme } from '../../interfaces/JSSTheme';

const style = ({ parameters, contentDensity }: JSSTheme) => ({
  header: {
    display: 'flex',
    height: ContentDensity.Compact === contentDensity ? '2.5rem' : '3rem',
    lineHeight: ContentDensity.Compact === contentDensity ? '2.5rem' : '3rem',
    textAlign: 'center',
    width: 'auto',
    alignItems: 'center',
    '& $icon': {
      '& >*': {
        verticalAlign: 'middle'
      }
    },
    // justifyContent: 'center',
    padding: '0.25rem 1rem',
    boxSizing: 'border-box',
    borderBottom: `1px solid var(--messageBoxBorderColor)`,
    color: parameters.sapUiContentLabelColor,
    fontSize: '1rem',
    '&[data-type="Error"]': {
      '--sapUiPageFooterBorderColor': parameters.sapUiErrorBorder,
      '--messageBoxBorderColor': parameters.sapUiErrorBorder,
      '& $icon': {
        '--sapUiContentNonInteractiveIconColor': parameters.sapUiNegativeElement
      }
    },
    '&[data-type="Warning"]': {
      '--sapUiPageFooterBorderColor': parameters.sapUiWarningBorder,
      '--messageBoxBorderColor': parameters.sapUiWarningBorder,
      '& $icon': {
        '--sapUiContentNonInteractiveIconColor': parameters.sapUiCriticalElement
      }
    },
    '&[data-type="Success"]': {
      '--sapUiPageFooterBorderColor': parameters.sapUiSuccessBorder,
      '--messageBoxBorderColor': parameters.sapUiSuccessBorder,
      '& $icon': {
        '--sapUiContentNonInteractiveIconColor': parameters.sapUiPositiveElement
      }
    },
    '&[data-type="Confirm"]': {
      '--sapUiPageFooterBorderColor': parameters.sapUiNeutralBorder,
      '--messageBoxBorderColor': parameters.sapUiNeutralBorder,
      '& $icon': {
        '--sapUiContentNonInteractiveIconColor': parameters.sapUiNeutralElement
      }
    },
    '&[data-type="Information"]': {
      '--sapUiPageFooterBorderColor': parameters.sapUiNeutralBorder,
      '--messageBoxBorderColor': parameters.sapUiNeutralBorder,
      '& $icon': {
        '--sapUiContentNonInteractiveIconColor': parameters.sapUiNeutralElement
      }
    },
    '&[data-type="Highlight"]': {
      '--sapUiPageFooterBorderColor': parameters.sapUiInformationBorder,
      '--messageBoxBorderColor': parameters.sapUiInformationBorder,
      '& $icon': {
        '--sapUiContentNonInteractiveIconColor': parameters.sapUiInformativeElement
      }
    }
  },
  icon: {
    marginRight: '0.5rem',
    fontSize: '1rem',
    width: '1rem'
  },
  content: {
    padding: '1rem'
  },
  footer: {
    height: ContentDensity.Compact === contentDensity ? '2.5rem' : '3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 0.5rem',
    '& >*:not(:last-child)': {
      marginRight: '0.5rem'
    },
    '& > ui5-button': {
      display: 'flex'
    }
  }
});

export default style;
