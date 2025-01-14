import styled, { css } from "styled-components";

export const TodoItemContainer = styled.div`
  position: relative;
  padding: 1em 1.5rem;
  border-bottom: 1px solid var(--border);
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CheckBoxContainer = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
`;

export const Label = styled.label<{ $completed: boolean }>`
  margin-left: 30px;
  cursor: pointer;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  ${props =>
    props.$completed &&
    css`
      text-decoration: line-through;
    `};
  &:hover {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    height: auto;
    width: 90%;
    margin: 0;
    padding: 1em;
    border: 1px solid var(--border);
    border-radius: 0.5em;

    text-overflow: clip;;
    background-color: var(--white);
    white-space: wrap;
    z-index: 10;
  }
`;

export const CheckBox = styled.input`
  position: absolute;
  visibility: hidden;
  &:checked + span {
    border-color: var(--green);
  }
  &:checked + span:after {
    border-color: var(--green);
    opacity: 1;
  }
`;

export const CheckBoxMask = styled.span`
  position: absolute;
  display: block;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: 1px solid var(--border);
  cursor: pointer;
  &:after {
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: 6px;
    left: 5px;
    opacity: 0;
    position: absolute;
    top: 6px;
    transform: rotate(-45deg);
    width: 12px;
  }
  &:hover {
    border-color: var(--green);
  }
`;

export const CloseButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  color: var(--attention-color);
  font-size: inherit;
  font-weight: 700;
  &:hover {
    color: var(--attention-color-hover);
  }
`;



export const EditButton = styled.button`
  padding: 1px 8px;
  border: none;
  font-size: inherit;
  background: none;
  cursor: pointer;
  color: inherit;
  i {
    vertical-align: middle;
  }
  &:hover {
    color: var(--attention-color-hover);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
`;