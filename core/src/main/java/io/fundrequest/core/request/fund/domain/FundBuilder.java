package io.fundrequest.core.request.fund.domain;

import java.math.BigDecimal;

public final class FundBuilder {
    private String funder;
    private BigDecimal amountInWei;
    private Long requestId;

    private FundBuilder() {
    }

    public static FundBuilder aFund() {
        return new FundBuilder();
    }

    public FundBuilder withFunder(String funder) {
        this.funder = funder;
        return this;
    }

    public FundBuilder withAmountInWei(BigDecimal amountInWei) {
        this.amountInWei = amountInWei;
        return this;
    }

    public FundBuilder withRequestId(Long requestId) {
        this.requestId = requestId;
        return this;
    }

    public Fund build() {
        return new Fund(funder, amountInWei, requestId);
    }
}
