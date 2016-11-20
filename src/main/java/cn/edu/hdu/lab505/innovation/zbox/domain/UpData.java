package cn.edu.hdu.lab505.innovation.zbox.domain;

public class UpData {
	// 从机地址
	private String address;
	// 数据帧数量
	private int frameAmount;
	// 数据帧头
	private String frameHead;
	// 数据id
	private int dataId;
	// 数据长度
	private int dataLength;
	// 数据
	private String data;

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getFrameAmount() {
		return frameAmount;
	}

	public void setFrameAmount(int frameAmount) {
		this.frameAmount = frameAmount;
	}

	public String getFrameHead() {
		return frameHead;
	}

	public void setFrameHead(String frameHead) {
		this.frameHead = frameHead;
	}

	public int getDataId() {
		return dataId;
	}

	public void setDataId(int dataId) {
		this.dataId = dataId;
	}

	public int getDataLength() {
		return dataLength;
	}

	public void setDataLength(int dataLength) {
		this.dataLength = dataLength;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

}
