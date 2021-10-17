import { useItems } from 'modules/Items/context';
import { ITEMS_TABLE_DEF } from 'modules/Items/models';
import Icons from 'shared/ui/Icons';
import Panel, { Header, Content } from 'shared/ui/Panel';
import styled, { css } from 'styled-components';

const ItemsDetail = () => {
  const { state, dispatch } = useItems();
  const { detailId, data } = state;
  const detail = data && detailId && data[detailId];

  return (
    <Root isOpen={!!detailId}>
      <Panel>
        <Header>
          Detail
          <button onClick={() => dispatch({ type: 'toggle-detail', payload: { id: null } })}>
            <Icons.Close />
          </button>
        </Header>
        <Content>
          {Object.entries(detail || {}).map(([field, value]) => (
            <div key={field}>
              <p>
                <strong>{ITEMS_TABLE_DEF[field]?.label || field}</strong>
              </p>
              <p>{value}</p>
              <br />
            </div>
          ))}
        </Content>
      </Panel>
    </Root>
  );
};

export default ItemsDetail;

/** Styled components */

interface RootProps {
  isOpen?: boolean;
}
const Root = styled.div<RootProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    opacity: ${isOpen ? '1' : '0'};

    ${theme.device.tabletS} {
      transition: width 0.45s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.45s linear;
      width: ${isOpen ? '240px' : '0px'};
      padding-left: ${isOpen ? '24px' : '0px'};
      overflow: hidden;
    }

    & > * {
      height: 100%;
      width: 100%;
    }
  `}
`;
