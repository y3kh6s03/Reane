import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";
import styles from "./styles/ActionInput.module.scss"

interface ActionInputProps {
  actionData: {
    setIsActionModal: Dispatch<SetStateAction<boolean>>,
    skillName: string
    addActions: AddAction[],
    setAddActions: Dispatch<SetStateAction<AddAction[]>>,
    inputAction: string,
    setInputAction: Dispatch<SetStateAction<string>>,
    addedActions?: {[key:string]:string[]}
  }
};

export interface AddAction {
  id: number,
  name: string,
}

export default function ActionInputModal({ actionData }: ActionInputProps) {

  const test = () => {
    actionData.setIsActionModal((prev) => !prev);
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    actionData.setInputAction(e.target.value);
  }

  const onBlurHandler = () => {
    if (actionData.inputAction !== '') {
      const addAction = { id: new Date().getTime(), name: actionData.inputAction }
      actionData.setAddActions((prev: AddAction[]) => [...prev, addAction])
      actionData.setInputAction('');
    }
  }

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onBlurHandler();
  }

  const handleInputEdit = (name: string, id: number) => {
    actionData.setAddActions((prevActions) => {
      const newAddActions = prevActions.map((action) => {
        if (action.id === id) {
          // eslint-disable-next-line no-param-reassign
          action.name = name;
        }
        return action
      })
      return newAddActions;
    })
  }


  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.modal_title}>
          ACTION追加
        </h2>

        <h3 className={styles.skill}>
          SKILL
          <span className={styles.skill_name}>
            {actionData.skillName}
          </span>
        </h3>

        <h3 className={styles.action}>
          ACTION
          <span className={styles.action_name}>
            {actionData.addedActions
              ? actionData.addedActions[actionData.skillName]
              : ''
            }
          </span>
        </h3>


        <h3 className={styles.addAction}>
          ADD ACTION
          <form onSubmit={(e) => { onSubmitHandler(e) }}>
            <input
              type="text"
              className={styles.action_input}
              placeholder="actionを追加"
              value={actionData.inputAction}
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
            />
          </form>
          <ul className={styles.addAction_container}>
            {
              actionData.addActions.map((action) =>
                <li key={action.id}>
                  <input
                    className={styles.addAction_name}
                    value={action.name}
                    onChange={(e) => { handleInputEdit(e.target.value, action.id) }}
                  />
                </li>
              )
            }
          </ul>
        </h3>

        <div className={styles.button_container}>
          <button
            className={styles.cancel_button}
            type="button"
            onClick={() => { test() }}>
            CANCEL
          </button>
          <button
            className={styles.save_button}
            type="button"
            onClick={() => { test() }}>
            SAVE
          </button>
        </div>
      </div>
    </div>
  )
}