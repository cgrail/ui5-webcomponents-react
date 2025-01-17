import React, { useCallback, useContext, useEffect } from 'react';
import { ScrollContext } from '@ui5/webcomponents-react/lib/ScrollContext';

export const ObjectPageLink = (props) => {
  const {
    children,
    inactiveClass = '',
    activeClass = '',
    id,
    onSetActive,
    alwaysToTop = false,
    scrollOffset = 0
  } = props;

  const { selectedElementId, scrollToElementById, scrollToTop } = useContext(ScrollContext);

  const onClick = useCallback(() => {
    if (alwaysToTop) {
      scrollToTop();
    } else {
      scrollToElementById(id, scrollOffset);
    }
  }, [scrollToElementById, id]);

  useEffect(() => {
    if (selectedElementId === id && typeof onSetActive === 'function') {
      onSetActive(id);
    }
  }, [selectedElementId]);

  let classString;

  if (id === selectedElementId) {
    classString = activeClass;
  } else {
    classString = inactiveClass;
  }

  return (
    <div style={{ cursor: 'pointer' }} className={classString} onClick={onClick}>
      {children}
    </div>
  );
};
