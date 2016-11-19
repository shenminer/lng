package cn.edu.hdu.lab505.innovation.domain.data;

/**
 * Created by hhx on 2016/11/19.
 */
public class Data {
    private long timestamp;
    private float value;

    public Data() {
    }

    public Data(long timestamp, float value) {
        this.timestamp = timestamp;
        this.value = value;
    }

    public long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }

    public float getValue() {
        return value;
    }

    public void setValue(float value) {
        this.value = value;
    }
}
