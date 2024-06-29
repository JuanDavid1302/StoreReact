interface CheckboxProps {
  id: string;
  label: string;
}

interface CollapseProps {
  name: string;
  checkboxes: CheckboxProps[];
  idCollapse: string;
}

const Collapse: React.FC<CollapseProps> = ({
  name,
  checkboxes,
  idCollapse,
}) => {
  return (
    <>
      <ul className="">
        <li className="custom-filters">
          <a
            className=""
            data-bs-toggle="collapse"
            href={"#" + idCollapse}
            role="button"
            aria-expanded="false"
            aria-controls={idCollapse}
          >
            {name}
          </a>
        </li>
      </ul>
      <div className="collapse" id={idCollapse}>
        <div className="card customCard-body">
          {checkboxes.map((checkbox) => (
            <div key={checkbox.id} className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id={checkbox.id}
              />
              <label className="form-check-label" htmlFor={checkbox.id}>
                {checkbox.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Collapse;
