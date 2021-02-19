import styles from '../styles/input.module.css'
import Range from './input/range.js'

const Input = () => (
    <form>
        <p>URL:</p>
            <input type="text" class={styles.input}/>
            <div className={styles.options}>
                <div>
                    <Range name="Maximum Depth"/>
                </div>
                <div>
                    <Range name="Maximum Node Count"/>
                </div>
                <div>
                    <Range name="Maximum Connections Per Node"/>
                </div>
            </div>
        <input type="submit" value="submit"/>
    </form>
)

export default Input