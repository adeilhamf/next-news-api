import { Toolbar } from '../components/toolbar'
import styles from '../styles/about.module.css'
import Head from 'next/head'

export const about = ({employee}) => {
  return (
<div className="page-container">
<Head>
        <title>Employee Of The Month</title>
        <meta
          name="description"
          content={`This month's employee of the month is ${employee.name}`}
        />

        <meta property="og:image" content={employee.image} />
        <meta property="og:title" content="Employee Of The Month" />
        <meta
          property="og:description"
          content={`This month's employee of the month is ${employee.name}`}
        />

        <meta property="twitter:image" content={employee.image} />
        <meta property="twitter:title" content="Employee Of The Month" />
        <meta
          property="twitter:description"
          content={`This month's employee of the month is ${employee.name}`}
        />
      </Head>

    <Toolbar/>
    <div className={styles.main}>
        <h1>About Me</h1>
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
    const apiResponse = await fetch('https://my-json-server.typicode.com/adeilhamf/next-news-api/employeeOfTheMonth')
    
    const employee = await apiResponse.json()

    return {
        props: {
            employee
        }
    }
}
    
export default about;