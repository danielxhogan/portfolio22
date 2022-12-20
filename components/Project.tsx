import { useState } from 'react';

import { StaticImageData } from 'next/image';

import styles from '../styles/Project.module.css'

const SHOWN = 'shown';
const HIDDEN = 'hidden';

export interface IProject {
  key: React.Key,
  projectTitle: String,
  projectDescription: String,
  projectImage: StaticImageData
}

interface IProjectProps {
  project: IProject
}

export default function Project({ project }: IProjectProps) {
  const [ shownHidden, setShownHidden ] = useState(HIDDEN);

  const onClickChevronBtn = () => {
    switch (shownHidden) {
      case HIDDEN: setShownHidden(SHOWN); break;
      case SHOWN: setShownHidden(HIDDEN); break;
    }
  };
  return (
    <div className={styles['main']}>
      <div className={styles['header']}>
        <h3>{ project.projectTitle }</h3>
        <div className={styles['chevron']}>
          <i className='fa-solid fa-angle-down' />
        </div>
      </div>
    </div>
  )
}