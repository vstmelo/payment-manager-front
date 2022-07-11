import css from "./styles.module.scss";

export function SideBar(): JSX.Element {
  return (
    <div className={css.imgSection}>
      <div className={css.sectionTitle}>
        <h3>Gerencie todos os pagamentos da sua empresa em um só lugar.</h3>
      </div>
    </div>
  );
}
