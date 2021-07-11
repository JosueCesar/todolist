import React from 'react';
import { MdRadioButtonUnchecked } from 'react-icons/md';
import { MdRadioButtonChecked } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';

import { ListContainer } from '../../styles/Styles';
import { TaskProps } from '../../hooks/tasks';
export interface ListProps {
  title: string;
  titleIcon?: string;
  tasks: TaskProps[];
  concludeTask(id: string): void;
  deleteTask(id: string): void;
}

const List: React.FC<ListProps> = ({
    title
  , titleIcon
  , tasks
  , concludeTask
  , deleteTask
  }) => {

  return tasks.length === 0 ?
  (
    <ListContainer>
      <h2>{title}{titleIcon ? titleIcon : false}:</h2>
      <ul><li><p><em>There is nothing {title.toLowerCase()}...</em></p></li></ul>
    </ListContainer>
  ) : (
    <ListContainer>
      <h2>{title}{titleIcon ? titleIcon : false}:</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>

            <button id='conclude' onClick={() => concludeTask(task.id)}>
              {task.pending ?
                <MdRadioButtonUnchecked/> :
                <MdRadioButtonChecked/>
              }
            </button>

            {task.pending ?
              <span>{task.task}</span> :
              <span className="striked">{task.task}</span>
            }  

            <button id='delete' onClick={() => deleteTask(task.id)}>
              <MdDelete/>
            </button>

          </li>
        ))}
      </ul>
    </ListContainer>
  );
}

export default List;