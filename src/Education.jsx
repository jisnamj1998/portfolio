import React from 'react'

function Education({qualifications}) {
   

  return (
    <div>
      <table>
      <tr>
        <th>Name</th>
        <th>University</th>
        <th>Grade</th>
      </tr>
      <tbody>
        {qualifications.map((q,i)=><tr>
          <td>{q.name}</td>
          <td>{q.university}</td>
          <td>{q.grade}</td>
        </tr>)
        }
      </tbody>
      </table>
    </div>
  )
}

export default Education
