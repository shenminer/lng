package cn.edu.hdu.lab505.innovation.domain.data;

import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.*;
import org.mongodb.morphia.utils.IndexType;


/**
 * Created by hhx on 2016/11/19.
 */
@Entity("productDocument")
@Indexes({
        @Index(fields = @Field(value = "productId")),
        @Index(fields = @Field(value = "start"))
}
)
public class Document {
    @Id
    private ObjectId id;
    private int productId;
    private long start;
    private Sensor S1 = new Sensor();
    private Sensor S2 = new Sensor();
    private Sensor S3 = new Sensor();
    private Sensor S4 = new Sensor();
    private Sensor S5 = new Sensor();
    private Sensor S6 = new Sensor();
    private Sensor S7 = new Sensor();
    private Sensor S8 = new Sensor();
    private Sensor S9 = new Sensor();
    private Sensor S10 = new Sensor();
    private Sensor S11 = new Sensor();
    private Sensor S12 = new Sensor();
    private Sensor S13 = new Sensor();
    private Sensor S14 = new Sensor();
    private Sensor S15 = new Sensor();
    private Sensor S16 = new Sensor();
    private Sensor S17 = new Sensor();
    private Sensor S18 = new Sensor();
    private Sensor S19 = new Sensor();
    private Sensor S20 = new Sensor();
    private Sensor S21 = new Sensor();
    private Sensor S22 = new Sensor();
    private Sensor S23 = new Sensor();
    private Sensor S24 = new Sensor();
    private Sensor S25 = new Sensor();
    private Sensor S26 = new Sensor();
    private Sensor S27 = new Sensor();
    private Sensor S28 = new Sensor();
    private Sensor S29 = new Sensor();
    private Sensor S30 = new Sensor();
    private Sensor S31 = new Sensor();
    private Sensor S32 = new Sensor();
    private Sensor S33 = new Sensor();

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public long getStart() {
        return start;
    }

    public void setStart(long start) {
        this.start = start;
    }

    public Sensor getS1() {
        return S1;
    }

    public void setS1(Sensor s1) {
        S1 = s1;
    }

    public Sensor getS2() {
        return S2;
    }

    public void setS2(Sensor s2) {
        S2 = s2;
    }

    public Sensor getS3() {
        return S3;
    }

    public void setS3(Sensor s3) {
        S3 = s3;
    }

    public Sensor getS4() {
        return S4;
    }

    public void setS4(Sensor s4) {
        S4 = s4;
    }

    public Sensor getS5() {
        return S5;
    }

    public void setS5(Sensor s5) {
        S5 = s5;
    }

    public Sensor getS6() {
        return S6;
    }

    public void setS6(Sensor s6) {
        S6 = s6;
    }

    public Sensor getS7() {
        return S7;
    }

    public void setS7(Sensor s7) {
        S7 = s7;
    }

    public Sensor getS8() {
        return S8;
    }

    public void setS8(Sensor s8) {
        S8 = s8;
    }

    public Sensor getS9() {
        return S9;
    }

    public void setS9(Sensor s9) {
        S9 = s9;
    }

    public Sensor getS10() {
        return S10;
    }

    public void setS10(Sensor s10) {
        S10 = s10;
    }

    public Sensor getS11() {
        return S11;
    }

    public void setS11(Sensor s11) {
        S11 = s11;
    }

    public Sensor getS12() {
        return S12;
    }

    public void setS12(Sensor s12) {
        S12 = s12;
    }

    public Sensor getS13() {
        return S13;
    }

    public void setS13(Sensor s13) {
        S13 = s13;
    }

    public Sensor getS14() {
        return S14;
    }

    public void setS14(Sensor s14) {
        S14 = s14;
    }

    public Sensor getS15() {
        return S15;
    }

    public void setS15(Sensor s15) {
        S15 = s15;
    }

    public Sensor getS16() {
        return S16;
    }

    public void setS16(Sensor s16) {
        S16 = s16;
    }

    public Sensor getS17() {
        return S17;
    }

    public void setS17(Sensor s17) {
        S17 = s17;
    }

    public Sensor getS18() {
        return S18;
    }

    public void setS18(Sensor s18) {
        S18 = s18;
    }

    public Sensor getS19() {
        return S19;
    }

    public void setS19(Sensor s19) {
        S19 = s19;
    }

    public Sensor getS20() {
        return S20;
    }

    public void setS20(Sensor s20) {
        S20 = s20;
    }

    public Sensor getS21() {
        return S21;
    }

    public void setS21(Sensor s21) {
        S21 = s21;
    }

    public Sensor getS22() {
        return S22;
    }

    public void setS22(Sensor s22) {
        S22 = s22;
    }

    public Sensor getS23() {
        return S23;
    }

    public void setS23(Sensor s23) {
        S23 = s23;
    }

    public Sensor getS24() {
        return S24;
    }

    public void setS24(Sensor s24) {
        S24 = s24;
    }

    public Sensor getS25() {
        return S25;
    }

    public void setS25(Sensor s25) {
        S25 = s25;
    }

    public Sensor getS26() {
        return S26;
    }

    public void setS26(Sensor s26) {
        S26 = s26;
    }

    public Sensor getS27() {
        return S27;
    }

    public void setS27(Sensor s27) {
        S27 = s27;
    }

    public Sensor getS28() {
        return S28;
    }

    public void setS28(Sensor s28) {
        S28 = s28;
    }

    public Sensor getS29() {
        return S29;
    }

    public void setS29(Sensor s29) {
        S29 = s29;
    }

    public Sensor getS30() {
        return S30;
    }

    public void setS30(Sensor s30) {
        S30 = s30;
    }

    public Sensor getS31() {
        return S31;
    }

    public void setS31(Sensor s31) {
        S31 = s31;
    }

    public Sensor getS32() {
        return S32;
    }

    public void setS32(Sensor s32) {
        S32 = s32;
    }

    public Sensor getS33() {
        return S33;
    }

    public void setS33(Sensor s33) {
        S33 = s33;
    }
}
