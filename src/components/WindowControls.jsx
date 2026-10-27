import useWindowStore from "#store/window";

const WindowControls = ({ target }) => {
  const { closeWindow } = useWindowStore();
  return (
    <div id="window-controls">
      <div
        title="close"
        className="close"
        onClick={() => closeWindow(target)}
      />
      <div
        title="minimize"
        className="minimize"
        onClick={() => closeWindow(target)}
      />
      <div className="maximize" onClick={closeWindow} />
    </div>
  );
};

export default WindowControls;
