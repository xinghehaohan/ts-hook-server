import React from "react";
import { User } from "../../types/user";
import { Project } from "../../types/project";
interface ListProps {
  users: User[];
  list: Project[];
}
export const List = ({ users, list }: ListProps) => {
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
