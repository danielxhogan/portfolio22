import styles from '../styles/DevSection.module.css'

import Project from './Project';
import { IProject } from './Project';

interface IDevSectionProps {
  sectionTitle: String,
  projects: IProject[]
}

export default function DevSection({ sectionTitle, projects }: IDevSectionProps) {

  const makeProjectsList = (projects: IProject[]) => {
    return(projects.map(project => {
        return (
          <div key={project.key}>
            <Project project={project} />
          </div>
        )
    }))
  }

  return (
    <div className={styles['main']}>
      <div className={styles['header']}>
        <h2>{ sectionTitle }</h2>
      </div>
      <div className={styles['content']}>
        { makeProjectsList(projects) }
      </div>
    </div>
  )
}