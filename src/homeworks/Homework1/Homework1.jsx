import './Homework1'
import { CardProduct } from "../../components/CardProduct";

function Homework1() {
  return (
    <div className="homework-box">
      <h3>📚 Домашнє завдання №1: Профіль Користувача</h3>
      <p>Нижче відрендерено мій виконаний компонент:</p>

      <div className="homework-preview-area">
        {/* 2. ВИКЛИКАЄМО ТВІЙ КОМПОНЕНТ ЯК ТЕГ! */}
        <CardProduct />
      </div>
    </div>
  );
}

export default Homework1