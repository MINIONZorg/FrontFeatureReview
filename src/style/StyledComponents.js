import styled from 'vue3-styled-components';

export const BacklogContainer = styled('div')`
    padding: 1em;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const NewTask = styled('div')`
    display: flex;
    margin-bottom: 1em;
`;

export const TaskInput = styled('input')`
    flex: 1;
    padding: 0.5em;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 0.5em;
`;

export const AddButton = styled('button')`
    padding: 0.5em 1em;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #369f6b;
    }
`;

export const TaskList = styled('ul')`
    list-style-type: none;
    padding: 0;
`;

export const TaskItem = styled('li')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 0.5em;
`;

export const RemoveButton = styled('button')`
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    padding: 0.25em 0.5em;

    &:hover {
        background-color: #c0392b;
    }
`;