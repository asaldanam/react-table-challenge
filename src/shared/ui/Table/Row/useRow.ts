import { useMemo, useState } from 'react';
import { RowProps } from '.';
import { TableRow } from '../types';

/** Handles row functions and data */
export default function useRow(props: RowProps) {
  const { data, onUpdate, onRemove, onCreate, def } = props;

  // Memoices cells and default empty row to def changes, preven
  const { cells, emptyRow } = useMemo(() => {
    console.log('CHANGE');
    const cells = Object.entries(def).filter(([colName]) => colName !== 'id');
    const emptyRow = cells.reduce((cells, [cell]) => ({ ...cells, [cell]: '' }), {});
    return { cells, emptyRow };
  }, [def]);

  const [editMode, setEditMode] = useState(props.editMode);
  const [form, setForm] = useState<Partial<TableRow>>({ ...emptyRow, ...data });

  const id = data.id;
  const createMode = !id;

  /** Toggles between edit mode */
  function toggleEdit() {
    setEditMode(!editMode);
  }

  /** Updates form */
  function update(field: keyof TableRow, value: string) {
    setForm({ ...form, [field]: value });
  }

  /** Clears form */
  function clear() {
    setForm(emptyRow);
  }

  /** Emits the remove of current row */
  function remove() {
    onRemove({ id });
  }

  /** Emits the creation of a new row */
  function add() {
    const isValid = _validateForm();
    if (!isValid) return;
    const { id, ...rest } = form;
    onCreate(rest);
    clear();
  }

  /** Emits the update of the current row */
  function save() {
    const isValid = _validateForm();
    if (!isValid) return;
    onUpdate({ ...form, id });
    setEditMode(false);
  }

  /** Validates current form */
  function _validateForm() {
    const { id, ...fields } = form;

    const invalidFields = Object.entries(fields).filter(([field, value]) => {
      const required = def[field].required;
      const invalid = required && !value;
      return invalid;
    });

    const isAllValid = invalidFields.length === 0;

    // Propmt msg if some field is invalid
    if (!isAllValid) alert(`This fields are required: ${invalidFields.join(' ').slice(0, -1)}.`);

    return isAllValid;
  }

  return {
    form,
    id,
    cells,
    editMode,
    createMode,
    actions: {
      toggleEdit,
      update,
      clear,
      remove,
      add,
      save,
    },
  };
}
