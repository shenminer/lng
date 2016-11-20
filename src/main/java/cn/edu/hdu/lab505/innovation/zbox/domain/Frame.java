package cn.edu.hdu.lab505.innovation.zbox.domain;

public class Frame {
	// 指令头
	private String instructionBegin;
	// 保留位
	private String reservedBits;
	// 终端标识
	private String terminalIidentification;
	// 指令序号
	private String number;
	// 业务号
	private String businessNo;
	// 指令功能字
	private String function;
	// 指令长度
	private String instructionLength;
	// 指令内容
	private String instructionContent;
	// 校验和
	private String checksum;
	// 指令尾
	private String instructionEnd;

	public String getBusinessNo() {
		return businessNo;
	}

	public void setBusinessNo(String businessNo) {
		this.businessNo = businessNo;
	}

	public String getInstructionBegin() {
		return instructionBegin;
	}

	public void setInstructionBegin(String instructionBegin) {
		this.instructionBegin = instructionBegin;
	}

	public String getReservedBits() {
		return reservedBits;
	}

	public void setReservedBits(String reservedBits) {
		this.reservedBits = reservedBits;
	}

	public String getTerminalIidentification() {
		return terminalIidentification;
	}

	public void setTerminalIidentification(String terminalIidentification) {
		this.terminalIidentification = terminalIidentification;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public String getFunction() {
		return function;
	}

	public void setFunction(String function) {
		this.function = function;
	}

	public String getInstructionLength() {
		return instructionLength;
	}

	public void setInstructionLength(String instructionLength) {
		this.instructionLength = instructionLength;
	}

	public String getInstructionContent() {
		return instructionContent;
	}

	public void setInstructionContent(String instructionContent) {
		this.instructionContent = instructionContent;
	}

	public String getChecksum() {
		return checksum;
	}

	public void setChecksum(String checksum) {
		this.checksum = checksum;
	}

	public String getInstructionEnd() {
		return instructionEnd;
	}

	public void setInstructionEnd(String instructionEnd) {
		this.instructionEnd = instructionEnd;
	}

}
