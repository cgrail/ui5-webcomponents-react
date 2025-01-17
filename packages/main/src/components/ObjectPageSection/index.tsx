import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import React, { forwardRef, ReactNode, ReactNodeArray, RefObject, FC } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
import { EmptyIdPropException } from '../ObjectPage/EmptyIdPropException';
import styles from './ObjectPageSection.jss';
import { useScrollElement } from '../ObjectPage/scroll/useScrollElement';

export interface ObjectPageSectionPropTypes extends CommonProps {
  title?: string;
  id: string;
  titleUppercase?: boolean;
  children: ReactNode | ReactNodeArray;
}

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles, { name: 'ObjectPageSection' });

const ObjectPageSection: FC<ObjectPageSectionPropTypes> = forwardRef(
  (props: ObjectPageSectionPropTypes, ref: RefObject<any>) => {
    const { title, id, children, titleUppercase, className, style, tooltip } = props;
    const classes = useStyles();

    if (!id) {
      throw new EmptyIdPropException('ObjectPageSection requires a unique ID property!');
    }

    const sectionRef: RefObject<HTMLElement> = useConsolidatedRef(ref);
    const htmlId = `ObjectPageSection-${id}`;

    useScrollElement(htmlId, sectionRef, {
      spy: true
    });

    const titleClasses = StyleClassHelper.of(classes.title);
    if (titleUppercase) {
      titleClasses.put(classes.uppercase);
    }

    return (
      <section ref={sectionRef} id={htmlId} role="region" className={className} style={style} title={tooltip}>
        <div role="heading" className={classes.header}>
          <div className={titleClasses.valueOf()}>{title}</div>
        </div>
        {/* TODO Check for subsections as they should win over the children */}
        <div className={classes.sectionContent}>
          <div className={classes.sectionContentInner}>{children}</div>
        </div>
      </section>
    );
  }
);

ObjectPageSection.defaultProps = {
  title: '',
  // @ts-ignore
  isSection: true,
  titleUppercase: true
};

ObjectPageSection.displayName = 'ObjectPageSection';

export { ObjectPageSection };
