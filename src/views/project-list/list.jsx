import React from "react";
export const List = ({ users, list }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Manager</th>
          </tr>
        </thead>
        <tbody>
          {list?.map(({ id, personId, organization }) => {
            return (
              <tr key={id}>
                <td>{organization}</td>
                <td>
                  {users.find((user) => user.id === personId)?.name ||
                    "no user"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
