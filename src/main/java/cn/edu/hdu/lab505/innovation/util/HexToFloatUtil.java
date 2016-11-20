package cn.edu.hdu.lab505.innovation.util;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;

public class HexToFloatUtil {
	public static float toFloat(byte[] b) {
		ByteBuffer buf = ByteBuffer.wrap(b);
		return buf.order(ByteOrder.LITTLE_ENDIAN).getFloat();
	}
}
