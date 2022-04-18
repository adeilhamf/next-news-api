import styles from '../styles/about.module.css'

export const about = ({employee}) => {
  return (
<div className="page-container">
    <div className={styles.main}>
        <h1>Employee of the month</h1>
        <div className={styles.employeeOfTheMonth}>
            <h3>Ade Ilham</h3>
            <h6>{employee.position}</h6>
            <img src={employee.image}/>
            <p>{employee.description}</p>
        </div>
    </div>
</div>  )
}

export const getServerSideProps = async pageContact =>{
    const apiResponse = await fetch('https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth')

    const employee = await apiResponse.json()

    return {
        props: {
            employee
        }
    }
}
    
export default about;