import styles from '../styles/Project.module.css'

import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { StaticImageData } from 'next/image';


const SHOWN = 'shown';
const HIDDEN = 'hidden';

export interface IProject {
  key: React.Key,
  projectTitle: String,
  projectDescription: String,
  projectDescriptionFull: String,
  projectImage: StaticImageData,
  languages: String,
  librariesAndFramework: String,
  githubLink: String,
  siteLink?: String,
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

        <Link href={`/project/${project.key}`}>
          <h3>{ project.projectTitle }</h3>
        </Link>

        <div
          className={`
            ${styles['chevron']}
            ${styles[shownHidden]}
          `}
          onClick={onClickChevronBtn}
          >
          <i className='fa-solid fa-angle-down' />
        </div>

      </div>
      <Link href={`/project/${project.key}`}>
      <div className={`
        ${styles['content']}
        ${styles[shownHidden]}
        `}>

        <div className={styles['image']}>
          <Image
            className={styles['large-image']}
            src={project.projectImage}
            alt='mvplaylist'
            height={200}
          />
          <Image
            className={styles['small-image']}
            src={project.projectImage}
            alt='mvplaylist'
            height={100}
          />
        </div>

        <div className={styles['description']}>
          <h4>{ project.projectDescription }</h4>
        </div>

      </div>
      </Link>
    </div>
  )
}