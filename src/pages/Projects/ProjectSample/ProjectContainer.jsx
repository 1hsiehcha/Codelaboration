import '../projects.css';
import ProjectViewMoreSection from './ProjectViewMoreSection';

const ProjectContainer = (props) => {
  return (
    <div className='project__container-title' onClick={() => props.stateChange(<ProjectViewMoreSection {...props} />)}>
      <h3>
        {props.role}
      </h3>
      <p>
        {props.name}
      </p>
    </div>
  )
}

export default ProjectContainer