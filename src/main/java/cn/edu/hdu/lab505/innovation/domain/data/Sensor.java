package cn.edu.hdu.lab505.innovation.domain.data;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by hhx on 2016/11/19.
 */
public class Sensor {
    private List<Data> dataList = new ArrayList<Data>();

    public Sensor() {
    }

    public void add(Data data) {
        dataList.add(data);
    }

    public List<Data> getDataList() {
        return dataList;
    }

    public Sensor(List<Data> dataList) {
        this.dataList = dataList;
    }

    public void setDataList(List<Data> dataList) {
        this.dataList = dataList;
    }
}
