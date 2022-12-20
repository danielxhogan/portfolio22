import { allProjects } from '../projects'
import { IProject } from '../../components/Project'

interface IProjectPageProps {
  projectData: IProject
}

export default function ProjectPage({ projectData }: IProjectPageProps) {
  return (
    <>
      { projectData.projectTitle }
    </>
  )
}

export async function getStaticPaths() {
  // const paths = [
  //   {params: { id: 1}}
  // ]

  const paths = allProjects.map(project => {
    return {params: { id: project.key.toString() }}
  })

  return { paths, fallback: false}
}

interface IGetStaticProps {
  params: {
    id: String
  }
}

export async function getStaticProps({ params }: IGetStaticProps) {
  let projectData;

  allProjects.forEach(project => {
    if (project.key.toString() == params.id) {
      projectData = project
      return
    }
  })

  return { props: {projectData}}
}