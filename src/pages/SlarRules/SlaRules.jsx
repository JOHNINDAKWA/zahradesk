import SlaRulesHeader from '../../components/SlaRulesHeader/SlaRulesHeader';
import SlaRuleStats from '../../components/SlaRuleStats/SlaRuleStats';
import SlaRuleTable from '../../components/SlaRuleTable/SlaRuleTable';
import './SlaRules.css';

const SlaRules = () => {
  return (
    <div className="sla-rules-page">
      <SlaRulesHeader />
      <SlaRuleStats />
      <SlaRuleTable />
    </div>
  );
};

export default SlaRules;
