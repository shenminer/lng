package cn.edu.hdu.lab505.innovation.zbox.support;

import cn.edu.hdu.lab505.innovation.zbox.domain.UpData;

import java.util.ArrayList;
import java.util.List;


public class UpDataSupport {
    private List<String> errorId;
    // 数据帧
    private List<UpData> updataFrame;

    // 指令内容
    private String dataString;

    public UpDataSupport() {
        this.updataFrame = new ArrayList<>();
        this.errorId = new ArrayList<>();
    }

    public void reset() {
        this.updataFrame = new ArrayList<>();
        this.errorId = new ArrayList<>();
    }

    protected void analyze() {
        // 从机地址
        String address = this.dataString.substring(0, 2);
        // 数据帧数量
        int frameAmount = Integer.valueOf(dataString.substring(2, 4), 16);// 转成10进制
        int p = 4;
        for (int i = 0; i < frameAmount; i++) {
            UpData dataStructure = new UpData();
            // 数据帧头
            String frameHead = this.dataString.substring(p, p + 2);
            // 数据id
            int dataId = Integer.valueOf(this.dataString.substring(p + 4, p + 6), 16);
            // 数据长度
            int dataLength = Integer.valueOf(this.dataString.substring(p + 6, p + 10), 16);
            if (dataLength == 0) {
                // 捕获数据长度为0异常的数据原生16进制id
                this.errorId.add(this.dataString.substring(p + 4, p + 6));
                continue;
            }
            // 数据
            String data = this.dataString.substring(p + 10, p + 10 + dataLength * 2);

            p = p + 2 + 2 + 2 + 4 + dataLength * 2;
            dataStructure.setAddress(address);
            dataStructure.setData(data);
            dataStructure.setDataId(dataId);
            dataStructure.setDataLength(dataLength);
            dataStructure.setFrameAmount(frameAmount);
            dataStructure.setFrameHead(frameHead);
            updataFrame.add(dataStructure);
        }

    }

    public List<UpData> getUpdataFrame() {
        return updataFrame;
    }

    public void setDataString(String dataString) {
        this.dataString = dataString;
        this.analyze();
    }

    public List<String> getErrorId() {
        return errorId;
    }

}
